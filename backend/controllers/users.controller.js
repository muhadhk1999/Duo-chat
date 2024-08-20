import User from "../models/userModel.js";

export const getUsersFromSidebar = async (req, res) => {
    try {
        if (!req.user || !req.user._id) {
            return res.status(400).json({ error: "User not authenticated" });
        }

        const loggedInUserId = req.user._id;
        const filteredUser = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json(filteredUser);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};
