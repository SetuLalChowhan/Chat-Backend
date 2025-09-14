import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import UserRoutes from "./routes/user.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser"

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", UserRoutes);

app.listen(PORT, () => {
  console.log(`server on running on port ${PORT}`);
  connectDB();
});
