import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContex'
import useConversation from '../zustand/useConversation';
import notificatioSound from '../assets/sound/notificatio.wav'

const useListenMessage = () => {

    const {socket } = useSocketContext();
    const {messages,setMessages} = useConversation();

    useEffect(()=>{
        socket?.on("newMessage",(newMessage) => {
            newMessage.shouldshake = true;
            const sound = new Audio(notificatioSound)
            sound.play();
            setMessages([...messages,newMessage])
        });
        return ()=> socket?.off("newMessage")
    },[socket,setMessages,messages])
}

export default useListenMessage