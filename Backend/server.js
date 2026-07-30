const express = require("express");
const dotenv = require("dotenv");
const { initDatabase } = require('./controllers/initDB');
const db = require("./models/connection.js");
dotenv.config();

initDatabase();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

app.get("/users", async (req, res) => {
  const result = await db.query("SELECT * FROM users");
  res.json(result.rows);
});

app.post("/user", async (req, res) => {
  const { name, regNo, email, password, age } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO users (name, registration_number, email, password, age) VALUES ($1,$2,$3,$4,$5)",
    );
    res.json({ message: "User created", user: result.rows[0] });
  } catch (err) {
    res.json({ message: "Error", error: err.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const result = await db.query("SELECT * FROM users WHERE email=$1 AND password=$2", [email, password]);
  if (result.rows.length > 0) {
    res.json({ message: "Login successful", user: result.rows[0] });
  } else {
    res.json({ message: "Invalid credentials" });
  }
});

app.delete("/profile", async (req, res) => {
  const { email } = req.body;
  await db.query("DELETE FROM users WHERE email", email);
  res.json({ message: "Profile deleted" });
});

app.listen(3000, () => console.log("Server running"));