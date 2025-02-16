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