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

// <------------------------------------------------------------------->

// Lexical Scoping & Closures

// Syntax

function createCounter() {
    let count = 0; // 'count' is a local variable created by createCounter

    return function () {
        // This inner function forms a closure.
        // It remembers 'count' even after createCounter() has finished running.
        count++;
        return count;
    }
}

const myCounter = createCounter(); // createCounter finishes executing here.

console.log(myCounter()); // Output: 1
console.log(myCounter()); // Output: 2
// There is absolutely no way to access or modify 'count' directly from the outside.

// THE CHALLENGE

// In Phase 6, you will be building an E-commerce Architecture. You need a secure, reliable way to generate sequential tracking IDs for incoming orders.
// You must write a function createOrderTracker(prefix) that utilizes closures.
// It should take a string prefix (e.g., "GUEST", "USER").
// It must return a function.
// Every time that returned function is invoked, it should return a new tracking string combining the prefix and an incrementing number.
// The number must increment independently for each tracker created, and the counter variable cannot be accessible globally.

function createOrderTracker(prefix) {
    // Your code goes here.
    let count = 0;
    return function () {
        count++;
        return `${prefix}_${count}`;
    }
}

const trackGuest = createOrderTracker("GUEST");
const trackUser = createOrderTracker("USER");

// trackGuest() // Expected: "GUEST_1"
// trackGuest() // Expected: "GUEST_2"
// trackUser()  // Expected: "USER_1"
// trackGuest() // Expected: "GUEST_3"

// <--------------------------------------------------------------->

// Basic Object-Oriented Concepts (ES6 Classes)

// Syntax
class ServerInstance {
  constructor(port, environment) {
    // 'this' refers to the specific object being created
    this.port = port;
    this.environment = environment;
    this.isRunning = false;
  }

  start() {
    this.isRunning = true;
    return `Server starting on port ${this.port} in ${this.environment} mode.`;
  }
}

// Instantiating new objects from the class blueprint
const productionServer = new ServerInstance(8080, 'production');
const devServer = new ServerInstance(3000, 'development');

console.log(devServer.start()); // Output: "Server starting on port 3000 in development mode."

//The Challenge
// Write an ES6 class named Wallet. It must meet the following strict requirements:

// Constructor: Takes two parameters: ownerName (string) and initialBalance (number).

// Method deposit(amount): Adds the amount to the balance.

// Method withdraw(amount): Checks if there are sufficient funds. If there are, it subtracts the amount and returns true. If not, it leaves the balance untouched and returns false.

// Method getSummary(): Returns a formatted string exactly like this: "[ownerName]'s balance is $[balance]"

// Here is your starting code:

class Wallet {
  // Your code goes here.
  constructor (ownerName , initialBalance){
    this.ownerName = ownerName;
    this.balance = initialBalance;
  }
  deposit(amount){
    this.balance = this.balance + amount;
  }
  withdraw(amount){
    if(this.balance >= amount){
        this.balance = this.balance - amount
        return true;
    }
    else{
        return false;
    }
  }
  getSummary(){
    return `${this.ownerName}'s balance is ${this.balance}`;
  }
}


const userWallet = new Wallet("Sahil", 100);

// userWallet.withdraw(50);   // Expected return: true (Balance is now 50)
// userWallet.withdraw(200);  // Expected return: false (Balance remains 50)
// userWallet.deposit(25);    // Balance is now 75
// userWallet.getSummary();   // Expected return: "Sahil's balance is $75"

// <-------------------------------------------------------------------->