import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = async (req, res, next) => {
    try {
       

        const token = req.cookies["jwt-token"];

        if (!token) {
            return res.status(401).json({ error: "Unauthorized or no token" });
        }

        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET); // Ensure matching secret key
        } catch (error) {
            console.error("Token verification error:", error.message);
            return res.status(401).json({ error: "Unauthorized or invalid token" });
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        req.user = user; // Attach user to request
        next();

    } catch (error) {
        console.error("Error in protectRoute middleware:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default protectRoute;
