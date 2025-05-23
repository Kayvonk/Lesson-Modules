import express from "express";
import userRoutes from "./userRoutes.js";

const router = express.Router();

// Funnel all /api/users requests to the userRoutes
router.use("/users", userRoutes);

export default router;
