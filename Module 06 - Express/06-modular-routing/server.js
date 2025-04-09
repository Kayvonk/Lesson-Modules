import express from "express";
import routes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Directs all routes into the index.js in the routes folder
app.use(routes);

app.use((req, res) => {
  res.status(404).json({ error: "API route not found" });
});

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
