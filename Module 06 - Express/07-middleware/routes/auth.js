import express from "express";
import { signup, login } from "../controllers/authController.js";

const router = express.Router();

// Signup route (POST request to /auth/signup)
router.post("/signup", signup);

// Login route (POST request to /auth/login)
router.post("/login", login);

export default router;
