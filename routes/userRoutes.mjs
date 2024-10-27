import express from "express";
import User from "../models/userSchema.mjs";

const router = express.Router();

// Create users
router.post("/", async (req, res) => {
  // Log the incoming request
  console.log("Request Body:", req.body);

  // Validate the request body
  const { username, email } = req.body;
  if (!username || !email) {
    return res.status(400).json({ msg: "Username and email are required." });
  }

  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;
