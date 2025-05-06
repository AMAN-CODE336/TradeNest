const express = require("express");
const router = express.Router();
const connection = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const JWT_SECRET = "mysecretkey321";

router.get("/", (req, resp) => {
  resp.status(201).json({ message: " registration succesfully" });
});

router.post("/register", async (req, resp) => {
  const { username, password, email } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO Signup (name, email, password) VALUES (?, ?, ?)";
    connection.query(sql, [username, email, hashedPassword], (err, result) => {
      if (err) {
        console.error("Error inserting user:", err);
        return resp.status(500).json({ message: "Registration failed" });
      }

      resp
        .status(201)
        .json({ message: "Registration successful", userId: result.insertId });
    });
  } catch (err) {
    console.error(err);
    resp.status(500).json({ message: "server error" });
  }
});

router.post("/login", (req, resp) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM Signup where name = ?";
  connection.query(sql, [username], async (err, results) => {
    if (err) {
      console.error("login error :", err);
      return resp.status(500).json({ message: "server error" });
    }

    if (results.length === 0) {
      return resp.status(401).json({ message: "invalid credentials " });
    }

    const user = results[0];

    const ismatch = await bcrypt.compare(password, user.password);
    if (!ismatch) {
      return resp.status(401).json({ message: "invalid credentials " });
    }

    const token = jwt.sign({ id: user.id, name: user.name }, JWT_SECRET, {
      expiresIn: "1d",
    });

    resp.status(200).json({
      message: "Login successful",
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  });
});

router.post("/google-login", (req, res) => {
  const { name, email } = req.body;

  const sql =
    "INSERT INTO Signup (name, email) VALUES (?, ?) ON DUPLICATE KEY UPDATE name = VALUES(name)";
  connection.query(sql, [name, email], (err, result) => {
    if (err) {
      console.error("Google login DB error:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(200).json({ message: "Google user saved" });
  });
});

module.exports = router;
