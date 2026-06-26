// .map, .filter, .reduce, .find

// The Syntax
const users = [
  { id: 1, name: 'Ali', active: true }, 
  { id: 2, name: 'Sara', active: false }
];

// .map() creates a new array of the exact same length, but transformed.
const names = users.map(user => user.name); 
// Result: ['Ali', 'Sara']

// .filter() creates a new, potentially shorter array based on a boolean condition.
const activeUsers = users.filter(user => user.active === true); 
// Result: [{ id: 1, name: 'Ali', active: true }]

// THE CHALLENGE 
// You have an array of objects representing items in a user's cart. You need to write a function getCartSummary(items) that accomplishes two things:
// Filters out any items that are out of stock (inStock: false).
// Calculates the total final cost of the remaining items, accounting for both price and qty.

const cart = [
  { name: "Laptop", price: 1000, qty: 1, inStock: true },
  { name: "Mouse", price: 50, qty: 2, inStock: true },
  { name: "Keyboard", price: 100, qty: 1, inStock: false }
];

function getCartSummary(items) {
  // Your code goes here. 
  // You must use high-order array methods.
  // Standard loops (for, for...of, forEach) are strictly forbidden.
  const instockItems = items.filter(item => item.inStock);
  const totalCost = instockItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  return totalCost;
}


// Expected Output of getCartSummary(cart) should be: 1100