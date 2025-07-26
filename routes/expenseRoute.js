import express from "express";
import {
    getExpenses,
    addExpense,
    deleteExpense,
    getExpensesByDateRange,
    getExpensesByCategory
}
from "../controllers/expenseController.js";

const router = express.Router();

router.get("/", getExpenses);
router.post("/",addExpense);
router.delete("/:id", deleteExpense);
router.get("/range", getExpensesByDateRange);
router.get("/category", getExpensesByCategory);

export default router;