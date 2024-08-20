import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { // Use correct environment variable name
        expiresIn: "15d", // Token expires in 15 days
    });

    res.cookie("jwt-token", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
        httpOnly: true,
        sameSite: "strict", // Adjust as needed
        secure: process.env.NODE_ENV === "production" // true if in production, false otherwise
    });
};

export default generateTokenAndSetCookie;
