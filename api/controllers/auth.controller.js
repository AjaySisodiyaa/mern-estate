import User from "../models/user.model.js";
import mongoose from "mongoose";

export const signup = async (req, res) => {
  // await mongoose
  //   .connect(process.env.MONGO)
  //   .then(() => console.log("Connected with db"));
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });
  await newUser.save();
  console.log(newUser);
  res.status(201).json("User Created Successfully");
};
