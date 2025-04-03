import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./db/connection";

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Hello from the backend" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
