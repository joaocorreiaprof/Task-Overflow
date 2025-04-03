import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./db/connection";
import mongoose from "mongoose";

const app = express();
const PORT = 5000;

connectDB();

app.use(cors());
app.use(express.json());

// Mongoose schema and model
const todosSchema = new mongoose.Schema(
  {
    task: String,
    status: String,
  },
  { collection: "todo" }
);

const Todo = mongoose.model("Todo", todosSchema);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Task Overflow API!");
});

// Route to fetch a backend message
app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "This is the new message!" });
});

// Route to fetch todos
app.get("/api/todos", async (req: Request, res: Response) => {
  console.log("Fetching todos...");
  try {
    const todos = await Todo.find();
    res.json(todos);
    console.log(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ error: "Failed to fetch todos" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
