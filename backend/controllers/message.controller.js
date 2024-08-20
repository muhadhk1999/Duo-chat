import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getRecieverSocketId } from "../socket/socket.js";
import { io } from '../socket/socket.js';

export const sendMessage = async (req,res) =>{
    try {
        const {message} = req.body
        const {id:recieverId} = req.params;
        const  senderId = req.user._id 
        

        let conversation = await Conversation.findOne({
            participants: {$all :[senderId,recieverId]},
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId,recieverId],
            })  
        }

        const newMessage = new Message({
            senderId,
            recieverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }

        // await conversation.save();
        // await newMessage.save();

        // this will run in parallel
        await Promise.all([conversation.save(), newMessage.save()])

        // SOCKET.IO FUNCTIONALITY HERE>>
        const recieverSocketId = getRecieverSocketId(recieverId);
        if(recieverSocketId){
            // io.to (<socketId>).emit() used to send events to specific client
            io.to(recieverSocketId).emit("newMessage",newMessage)
        }


        res.status(201).json(newMessage)
    } catch (error) {
        res.status(500).json({error:"internal server error"})
    }
};

export const getMessage = async(req , res )=>{
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all :[senderId, userToChatId]}
        }).populate("messages");

        if(!conversation){
            return res.status(200).json([]);
        }
        const message = conversation.messages;

        res.status(200).json(message);

    } catch (error) {
        res.status(500).json({error:"internal server error"})
    }
}