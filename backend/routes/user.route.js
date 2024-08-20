import Express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersFromSidebar } from "../controllers/users.controller.js";

const router = Express.Router();

// Apply the protectRoute middleware to the route
router.get("/", protectRoute, getUsersFromSidebar);

export default router;
