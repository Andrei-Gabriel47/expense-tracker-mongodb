import mongoose, { Schema } from "mongoose";

const expenseSchema = new Schema({
    title : String,
    amount: Number,
    category: String,
    date: Date
}, {timestamps: true});

export const Expense = mongoose.model("Expense", expenseSchema);

