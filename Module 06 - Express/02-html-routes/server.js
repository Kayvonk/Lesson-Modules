import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from "public" folder
app.use(express.static("public"));

// Route for Home Page
app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

// Route for About Page
app.get("/about", (req, res) => {
  res.sendFile(path.resolve("public/about.html"));
});

// 404 Route (Catch-all)
app.use((req, res) => {
  res.status(404).sendFile(path.resolve("public/404.html"));
});

// Starts Server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
