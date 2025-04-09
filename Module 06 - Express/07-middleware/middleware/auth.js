import jwt from "jsonwebtoken";

const secretKey = "your-secret-key"; // Store your secret key securely (ideally in environment variables)

const authenticate = (req, res, next) => {
  // Get the token from the Authorization header
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }

  // Split the Authorization header to get the token part
  const token = authHeader.split(" ")[1]; // "Bearer <token>"

  if (!token) {
    return res.status(401).json({ error: "Token is missing" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; // Add decoded user info to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    res.status(401).json({ error: "Token is not valid" });
  }
};

export default authenticate;
