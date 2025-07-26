import { Expense } from "../models/expense.js";

// GET all expenses
export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};

// POST new expense
export const addExpense = async (req, res) => {
  try {
    const { title, amount, category, date } = req.body;

    if (!title || !amount || !category || !date) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newExpense = new Expense({
      title,
      amount,
      category,
      date,
    });

    const savedExpense = await newExpense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    res.status(500).json({ message: `Error here ${error}` });
  }
};

// DELETE by ID
export const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    await Expense.findByIdAndDelete(id);
    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Expense not found" });
  }
};

// GET by Date Range
export const getExpensesByDateRange = async (req, res) => {
  const { start, end } = req.query;

  try {
    const expenses = await Expense.find({
      date: {
        $gte: new Date(start),
        $lte: new Date(end),
      },
    });

    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: `Problem: ${error}` });
  }
};

// GET by Category
export const getExpensesByCategory = async (req, res) => {
  const { category } = req.query;

  try {
    const expenses = await Expense.find({ category });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: `New problem: ${error}` });
  }
};
