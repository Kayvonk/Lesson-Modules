import express from "express";
import apiRoutes from "./api/index.js";

const router = express.Router();

// Funnel all /api routes to the apiRoutes
router.use("/api", apiRoutes);

export default router;
