import { v4 as uuidv4 } from "uuid";

let users = [
  { id: "1", name: "Alice", city: "New York" },
  { id: "2", name: "Bob", city: "Los Angeles" },
  { id: "3", name: "Charlie", city: "Chicago" },
];

// Gets all users
export const getAllUsers = (req, res) => {
  res.json(users);
};

// Gets one user by id
export const getUserById = (req, res) => {
  const userId = req.params.id;
  const foundUser = users.find((user) => user.id === userId);
  if (foundUser) {
    res.json(foundUser);
  } else {
    res.status(404).json({ error: "User not found" });
  }
};

// Creates a new user
export const createUser = (req, res) => {
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
};

// Updates a user by id
export const updateUser = (req, res) => {
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
};

// Deletes a user by id
export const deleteUser = (req, res) => {
  const userId = req.params.id;
  const userToDelete = users.find((user) => user.id === userId);

  if (!userToDelete) {
    return res.status(404).json({ error: "User not found" });
  }

  users = users.filter((user) => user.id !== userId);
  res.json({ message: "User deleted", user: userToDelete });
};
