//Task 1: Function Declaration
/*
We are creating a function to calculate the total invoice amount based on:

A subtotal (the initial amount before taxes and discounts).
A tax rate (percentage of tax added to the subtotal).
A discount (amount subtracted after tax is applied).
*/

function calculateInvoice(subtotal, taxRate, discount) {
  let total = (subtotal + (subtotal * taxRate)) - discount;
  return `Total Invoice: $${total.toFixed(2)}`;
}

console.log(calculateInvoice(100, 0.08, 5)); // "Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20)); // "Total Invoice: $530.00"


//Task 2: Function Expression - Employee Hourly Wage Calculation

/*We need to calculate the hourly wage of an employee given:

Their annual salary.
The number of hours worked per week.
We assume there are 52 weeks in a year.*/

const calculateHourlyWage = function(salary, hoursPerWeek) {
  let hourlyWage = salary / (hoursPerWeek * 52);
  console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`);
};

// Test Cases
calculateHourlyWage(52000, 40); // Expected Output: "Hourly Wage: $25.00"
calculateHourlyWage(75000, 35); // Expected Output: "Hourly Wage: $41.21"
