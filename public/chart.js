let chartInstance;
export function renderChart(expenses){
    const ctx=document.getElementById("expensesChart").getContext("2d");

    const aggregated = {};
    expenses.forEach( exp =>{
        const date = new Date(exp.date).toLocaleDateString();
        aggregated[date] = (aggregated[date] || 0 ) + exp.amount;
    });

    const labels = Object.keys(aggregated);
    const values = Object.values(aggregated);

    if(chartInstance){
        chartInstance.destroy();
    }
    chartInstance= new Chart(ctx, {
        type: "line",
        data:{
            labels,
            datasets:[{
                label: "Expenses by day",
                data: values,
                fill: false,
                borderColor: "rgb(75,192,192)",
                tension: 0.3
            }]
        },
        options:{
            responsive:true,
            scales:{
                y:{
                    beginAtZero: true
                }
            }
        }
    });
}