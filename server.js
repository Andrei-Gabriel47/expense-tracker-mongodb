import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import expenseRoutes from "./routes/expenseRoute.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/api/expenses", expenseRoutes);

app.listen(port, () =>{
    console.log("app is running on http://localhost:"+port);
});

