import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Mock database (in reality, use a real database like MongoDB or MySQL)
let users = [];

const secretKey = "your-secret-key"; // Use an environment variable for secret key

// Signup handler
export const signup = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  // Check if user already exists
  const userExists = users.find((user) => user.username === username);
  if (userExists) {
    return res.status(400).json({ error: "User already exists" });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user and store in the mock database
  const newUser = { username, password: hashedPassword };
  users.push(newUser);

  // Create JWT token
  const token = jwt.sign({ username: newUser.username }, secretKey, {
    expiresIn: "1h",
  });

  res.status(201).json({ message: "User created", token });
};

// Login handler
export const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  // Find the user
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  // Compare the password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  // Generate JWT token
  const token = jwt.sign({ username: user.username }, secretKey, {
    expiresIn: "1h",
  });

  res.json({ message: "Login successful", token });
};
