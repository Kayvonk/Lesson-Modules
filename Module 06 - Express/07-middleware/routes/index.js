import express from "express";
import apiRoutes from "./api/index.js";
import authRoutes from "./auth.js";
import authenticate from "../middleware/auth.js";

const router = express.Router();

// Apply authentication middleware to all /api routes
router.use("/api", authenticate, apiRoutes);

// Funnel all /auth routes to authRoutes (signup/login)
router.use("/auth", authRoutes);

export default router;
