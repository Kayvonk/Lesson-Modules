import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON
app.use(express.json());

const users = [
  { id: 1, name: "Alice", city: "New York" },
  { id: 2, name: "Pat", city: "Los Angeles" },
  { id: 3, name: "Charlie", city: "Chicago" },
];

// Gets all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

app.use((req, res) => {
  res.status(404).json({ error: "API route not found" });
});

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
