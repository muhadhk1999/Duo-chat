import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId,res) =>{
    const token = jwt.sign({userId},process.env.JWT_SECRET_KEY ,{
        expiresIn : "15d"
    })
    res.cookie("jwt",token,{
        maxAge: 15 * 24 *  60 * 60 * 1000,
        httpOnly: true,//prevent XXS attacks cross-site scripting attacks
        sameSite: "strict",//prevent some attack
        secure:process.env.NODE_ENV !== "devolopment"
    })
} 

export default generateTokenAndSetCookie;