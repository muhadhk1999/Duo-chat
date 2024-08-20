import User from "../models/userModel.js";

export const getUsersFromSidebar = async(req,res)=>{
    try {
        
        const loggedInUserId = req.user._id

        const filteredUser = await User.find({_id: {$ne: loggedInUserId }}).select("-password")

        res.status(200).json(filteredUser)

    } catch (error) {
        console.log("error occured from getUsersFromSidebar",error.message);
        res.status(500).json({error:"internal sever error"})
    }
}