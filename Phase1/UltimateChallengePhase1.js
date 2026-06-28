// The Connect Ustaad Core Logic Challenge
// You are building the foundational data layer for the Connect Ustaad platform. You need to implement an ID generator for manual bookings, fetch your worker data from an external API, process that data, and calculate market rates.

// You must write your code to fulfill these exact five requirements:

// 1. The Lexical Closure
// Write a standalone function named makeBookingTracker that takes a prefix string. It must return a closure that generates sequential booking IDs every time it is called (e.g., "BOOKING_1", "BOOKING_2").

// 2. The OOP Class
// Create an ES6 class named UstaadManager. Its constructor should initialize an empty array called workers.

// 3. Async/Await & Fetch (Day 3)
// Inside the class, create a method named fetchWorkers that takes a url string.
// It must be an async function.
// It must use a try/catch block.
// Inside the try, use the native fetch() API to await the response, parse the JSON, and assign the resulting array to this.workers.
// If it fails, the catch block should return the string "Network Error".

// 4. Filter, Map, Destructuring & Template Literals (Days 2 & 4)
// Inside the class, create a method named getActiveProfiles.
// It must use .filter() to find workers where isActive is strictly true.
// Then, it must chain .map() to return a new array of strings.
// Inside the .map(), you must use ES6 object destructuring to extract name and hourlyRate, and return a template literal formatted exactly like this: "Ali charges $15/hr".

// 5. Reduce (Day 4)
// Inside the class, create a method named getTotalMarketCapacity.
// It must use .reduce() on this.workers to sum up the hourlyRate of all workers in the array, returning the final total number.


// function makeBookingTracker(prefix) {
//     let count = 0;
//     return function() {
//         count++;
//         return `${prefix}_${count}`;
//     };
// }


// class UstaadManager {
//     constructor() {
//         this.workers = [];
//     }

//     async fetchWorkers(url) {
//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             this.workers = data;
//         }
//         catch (error) {
//             return "Network Error";
//         }
//     }

//     getActiveProfiles() {
//         return this.workers
//             .filter(worker => worker.isActive === true)
//             .map(({ name, hourlyRate }) => `${name} charges $${hourlyRate}/hr`);
//     }

//     getTotalMarketCapacity() {
//         return this.workers.reduce((total, worker) => total + worker.hourlyRate, 0);
//     }

//     }


// Here is your challenge. You are building the ReviewAnalyzer class for the Connect Ustaad platform. When an array of review objects is passed into the class, it will be stored in this.reviews.

// A single review object looks like this: { reviewer: "Ali", score: 5, isVerified: true }

// Your Requirements
// 1. getVerifiedSummaries()

// Target this.reviews.

// Chain a .filter() to keep only the reviews where isVerified is strictly true.

// Chain a .map() to that filtered result.

// Inside the map's callback, you must use ES6 destructuring to extract { reviewer, score } directly from the object.

// Return a template literal formatted exactly as: "[reviewer] gave a score of [score]"

// 2. getTotalReviewPoints()

// Target this.reviews.

// Use .reduce() to iterate through the array and accumulate the sum of every review's score.

// Return the final total number. Start your accumulator at 0.


class ReviewAnalyzer {
    constructor(reviews) {
        this.reviews = reviews;
    }

    getVerifiedSummaries() {
        return this.reviews
        .filter(review => review.isVerified === true)
        .map(({reviewer , score}) => `${reviewer} gave a score of ${score}`);
    }

    getTotalReviewPoints() {
        return this.reviews
        .reduce((total , review) => {
            return review.score + total;
        } , 0);
    }
}