const EMPLOYEES = [
    {name: 'azu', startDate: '2020-02-01', coffeePerDay: 0},
    {name: 'ldl', startDate: '2021-01-01', coffeePerDay: 3},
    {name: 'rma', startDate: '2023-10-01', coffeePerDay: 2.5}
];

function estimateCoffeeConsumption() {
    const current = new Date();
    let totalCups = 0;

    EMPLOYEES.forEach(employee => {
        const start = new Date(employee.startDate);
        const daysWorked = Math.floor((current - start) / (1000 * 60 * 60 * 24)); // Calculate days worked
        const coffeeConsumed = daysWorked * employee.coffeePerDay; // Total coffee consumed by the employee
        totalCups += coffeeConsumed; // Add to the total coffee consumption
    });

    return Math.round(totalCups);
}

document.addEventListener('DOMContentLoaded', () => {
    const coffeeCounter = document.getElementById('coffee-counter');
    const totalCups = estimateCoffeeConsumption();
    coffeeCounter.setAttribute('data-to', totalCups);
});