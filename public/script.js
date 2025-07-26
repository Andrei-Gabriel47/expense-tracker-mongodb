const API_URL="/api/expenses";
import { renderChart } from "./chart.js";

async function getExpenses() {
    try{
        const res = await fetch(API_URL);
        const data= await res.json();
        renderExpenses(data);
        renderChart(data);
    }
    catch(error){
        console.error(error)
    }
}

async function addExpense(expense){
    try{
        const res = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(expense)
        });
        const saved = await res.json();
        getExpenses();
    }
    catch(error){
        console.error(error)
    }
}

function renderExpenses(expenses){
    const container = document.getElementById('expensesList');
    container.innerHTML='';

    if(expenses.length===0){
        container.innerHTML='<p>No expenses found</p>';
        return;
    }
    expenses.forEach(exp => {
        const div = document.createElement("div");
        div.innerHTML=`
        <p>${exp.title} - ${exp.amount} $ </p>
        <p>${exp.category}</p>
        `;
        container.appendChild(div);
    });
}

document.getElementById("expenseForm").addEventListener("submit", async (e) =>{
    e.preventDefault()

    const title = document.getElementById("title").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;

    const newExpense ={
        title,
        amount,
        category,
        date
    };
    await addExpense(newExpense);
    e.target.reset();
});

document.addEventListener("DOMContentLoaded", getExpenses);

