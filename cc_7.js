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

//Task 4: Parameters and Arguments - Product Shipping Cost Calculation

/*
We calculate shipping costs based on:

The weight of the product.
The destination (USA or Canada).
Whether the shipping is expedited
*/

function calculateShippingCost(weight, location, expedited = false) {
  let baseCost = location === "USA" ? 5 + (0.5 * weight) : 10 + (0.7 * weight);
  if (expedited) baseCost += 10;
  console.log(`Shipping Cost: $${baseCost.toFixed(2)}`);
}

// Test Cases
calculateShippingCost(10, "USA", true); // Expected Output: "Shipping Cost: $20.00"
calculateShippingCost(5, "Canada", false); // Expected Output: "Shipping Cost: $13.50"

//Task 5: Returning Values - Business Loan Interest Calculation

/*We calculate total loan interest using the formula:
Interest = Principal * Rate * Years
*/

function calculateLoanInterest(principal, rate, years) {
  let interest = principal * rate * years;
  console.log(`Total Interest: $${interest.toFixed(2)}`);
}

// Test Cases
calculateLoanInterest(1000, 0.05, 3); // Expected Output: "Total Interest: $150.00"
calculateLoanInterest(5000, 0.07, 5); // Expected Output: "Total Interest: $1750.00"

//Task 6: Higher-Order Functions - Filtering High-Value Transactions

/*
Filter transactions above $1000 using a higher-order function.
*/

let transactions = [500, 1200, 3000, 800, 2200];

function filterHighValueTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}

// Test Case
console.log(filterHighValueTransactions(transactions, amount => amount > 1000)); 
// Expected Output: [1200, 3000, 2200]

//Task 7: Closures - Budget Tracker

/*
Create a closure function that keeps track of a running balance.
*/

function createBudgetTracker() {
  let balance = 0;
  return function(expense) {
      balance -= expense;
      console.log(`Current Balance: -$${Math.abs(balance)}`);
  };
}

// Test Cases
let budget = createBudgetTracker();
budget(300); // Expected Output: "Current Balance: -$300"
budget(200); // Expected Output: "Current Balance: -$500"
