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

//Task 3: Arrow Function - Customer Loyalty Discount

/*

We determine a discount based on how many years a customer has been loyal:

5+ years → 15% discount
3-4 years → 10% discount
Less than 3 years → 5% discount

*/

const calculateLoyaltyDiscount = (amount, years) => {
  let discount = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05;
  let discountedPrice = amount - (amount * discount);
  console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
};

// Test Cases
calculateLoyaltyDiscount(100, 6); // Expected Output: "Discounted Price: $85.00"
calculateLoyaltyDiscount(200, 2); // Expected Output: "Discounted Price: $190.00"


