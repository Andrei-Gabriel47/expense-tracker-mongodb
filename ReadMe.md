# Expense Tracker

This is a full-stack expense tracking web application built with Node.js, Express, and MongoDB on the backend, and vanilla JavaScript, HTML, and CSS on the frontend. It allows users to add, list, and visualize their expenses with interactive charts using Chart.js.

## Features

- Add expenses with title, amount, category, and date
- View all expenses in chronological order
- Filter expenses by category or date range (via API)
- Interactive line chart displaying daily totals
- Responsive and minimal dark-themed design

## Technologies Used

- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose)
- Frontend: HTML, CSS, JavaScript (ES6 Modules)
- Charts: Chart.js

## Installation


```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker


Create a .env file in the root directory with the following content:

PORT=5000
MONGODB_URI=your_mongo_connection_string