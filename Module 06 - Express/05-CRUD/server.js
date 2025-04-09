import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
// Allows parsing of form data
app.use(express.urlencoded());

let users = [
  { id: "1", name: "Alice", city: "New York" },
  { id: "2", name: "Bob", city: "Los Angeles" },
  { id: "3", name: "Charlie", city: "Chicago" },
];

// Gets all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

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

// Creates a user
app.post("/api/users", (req, res) => {
  const { name, city } = req.body;
  if (!name || !city) {
    return res.status(400).json({ error: "Name and city are required" });
  }

  const newUser = {
    id: uuidv4(),
    name: name,
    city: city,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// Updates a user
app.put("/api/users/:id", (req, res) => {
  const { name, city } = req.body;
  const userId = req.params.id;

  if (!name || !city) {
    return res.status(400).json({ error: "Name and city are required" });
  }

  users = users.map((user) => {
    if (user.id === userId) {
      return { ...user, name, city };
    }
    return user;
  });

  const updatedUser = users.find((user) => user.id === userId);

  if (!updatedUser) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(updatedUser);
});

// Deletes a user
app.delete("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const userToDelete = users.find((user) => user.id === userId);

  if (!userToDelete) {
    return res.status(404).json({ error: "User not found" });
  }

  users = users.filter((user) => user.id !== userId);
  res.json({ message: "User deleted", user: userToDelete });
});

app.use((req, res) => {
  res.status(404).json({ error: "API route not found" });
});

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
