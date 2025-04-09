import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON
app.use(express.json());

const users = [
  { id: "1", name: "Alice", city: "New York" },
  { id: "2", name: "Bob", city: "Los Angeles" },
  { id: "3", name: "Charlie", city: "Chicago" },
];

// Gets one user
app.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const foundUser = users.find((user) => user.id === userId);

  if (foundUser) {
    res.json(foundUser);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

// 404 API Route (Catch-all for undefined routes)
app.use((req, res) => {
  res.status(404).json({ error: "API route not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
