import mongoose from "mongoose";

export const connection = async() => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/next-todo`, {
    });
    console.log("Connection successful with MongoDB");
  } catch (err) {
    console.error("Connection failed with MongoDB:", err);
  }
};