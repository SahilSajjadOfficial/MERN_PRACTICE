// Async/Await Practice
// --- simulatedDatabase.js ---
// Assume this function already exists and works perfectly. 
// It requires an ID and returns a Promise.
const getWorkerFromDatabase = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: id, name: "Kamran", trade: "Electrician" }), 2000);
    });
};

// --- profileController.js ---
// WRITE YOUR CODE BELOW

// 1. Declare a constant named `loadWorker` and assign it an async arrow function.
// 2. The function should accept a single parameter: `workerId`.
// 3. Inside the block, declare a `const` named `workerData`.
// 4. Assign `workerData` the awaited result of calling `getWorkerFromDatabase(workerId)`.
// 5. Console.log the `workerData` object.

const loadWorker = async (workerId) => {
    const workerData = await getWorkerFromDatabase(workerId);
    console.log(workerData);
};

//<----------------------------------------------------------------->

// Try and Catch

// --- simulatedDatabase.js ---
const getWorkerFromDatabase = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isNetworkStable = Math.random() > 0.5;
            if (isNetworkStable) {
                resolve({ id: id, name: "Kamran", trade: "Electrician" });
            } else {
                reject(new Error("Database connection timed out."));
            }
        }, 1000);
    });
};
// Your Task: Rewrite your loadWorker function.

// Keep the async arrow function structure.

// Wrap your await getWorkerFromDatabase(workerId) and console.log(workerData) inside a try block.

// Add a catch block that accepts an error parameter.

// Inside the catch block, write: console.error("Failed to load:", error.message);

// Reply with your completely updated loadWorker code block.
// --- profileController.js ---
// Rewrite your loadWorker function below:

const loadWorker = async (workerId) => {
    try {
        const workerData = await getWorkerFromDatabase(workerId);
        console.log(workerData);
    }
    catch (error) {
        console.error("Failed to load:", error.message);
    }
}


// <--------------------------------------------------------->


// Parallel Execution (Promise.all)


// THE SLOW WAY (Takes 4 seconds)
const profile = await fetchProfile();
const reviews = await fetchReviews();

// THE FAST WAY (Takes 2 seconds)
// Notice how we use array destructuring to unpack the results!
const [profile, reviews] = await Promise.all([fetchProfile(), fetchReviews()]);

// The Challenge

//You are writing the backend controller that sends the complete data package to the Connect Ustaad frontend.

// Below is the "Slow Way" of writing this function. It fetches the data, but it takes twice as long as it needs to.

// --- simulatedDatabase.js ---
const getWorkerProfile = (id) => new Promise(res => setTimeout(() => res({ name: "Kamran" }), 2000));
const getWorkerReviews = (id) => new Promise(res => setTimeout(() => res(["Great work", "On time"]), 2000));

// --- profileController.js ---
// Rewrite this function to be fast:

const loadFullProfile = async (workerId) => {
    try {
        console.log("Fetching data...");

        // --- THE BOTTLENECK ---
        const profile = await getWorkerProfile(workerId);
        const reviews = await getWorkerReviews(workerId);
        // ----------------------

        // --- THE PARALLEL WAY ---
        const [profile , reviews] = await Promise.all([getWorkerProfile(workerId) , getWorkerReviews(workerId)]);
        // ------------------------
        console.log("Profile:", profile);
        console.log("Reviews:", reviews);
    } catch (error) {
        console.error(error.message);
    }
};

// <----------------------------------------------------------->

// The Fetch API

const getWeatherData = async () => {
    try {
        // Step 1: Connect to the URL
        const response = await fetch("https://api.weather.com/peshawar");
        
        // Step 2: Parse the raw response body into usable JSON
        const data = await response.json(); 
        
        console.log(data);
    } catch (error) {
        console.error("Network error:", error.message);
    }
};

// // THE CHALLENGE
// We are going to ping a real, live public test server on the internet called JSONPlaceholder.

// Your Task:

// Write an async arrow function named fetchTestUsers.

// Wrap the logic inside a try/catch block.

// Use fetch() to hit this exact URL: https://jsonplaceholder.typicode.com/users. Await the response and save it to a const named response.

// Parse the response into JSON. Await it, and save it to a const named users.

// Console log the users variable.

// (In the catch block, console log the error message just like you did in the previous exercise).


const fetchTestUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        console.log(users);

    } catch (error) {
        console.error("Failed to fetch users:", error.message);
    }
}


// <----------------------------------------------------------->
// THE BIG BOSS CHALLENGE


// The Objective
// Write a complete module from scratch that handles this entire process.

// The Live Endpoints:

// Workers API: https://jsonplaceholder.typicode.com/users

// Job Tickets API: https://jsonplaceholder.typicode.com/posts

// (Note: The Job Tickets API returns objects that have a userId property. This matches the id property from the Workers API).

// The Requirements
// You must write an object named AdminDashboard. Inside it, write an asynchronous method called generateReport. This method must do the following:

// Safety Net: Wrap the entire execution in a block that can gracefully catch and log any network crashes. If it crashes, the function should return the string "Dashboard initialization failed."

// Max Speed: Hit both live URLs at the exact same time. Do not wait for the workers to load before asking for the tickets.

// Data Parsing: Parse both raw network responses into usable JSON arrays.

// Data Synthesis (The MERN logic): Once you have both arrays, create a const named activeRoster. Map over the workers array. For each worker, use the .filter() method on the tickets array to find out exactly how many active jobs belong to them (where ticket.userId === worker.id).

// The Output: Return an array of formatted strings that looks exactly like this for every single worker:
// "[Worker Name] from [Worker City] currently has [Number] active job tickets in the database."

const workersAPI = "https://jsonplaceholder.typicode.com/users";
const ticketsAPI = "https://jsonplaceholder.typicode.com/posts";

const AdminDashboard = {
    generateReport: async () => {
        try {
            const [workersResponse, ticketsResponse] = await Promise.all([fetch(workersAPI), fetch(ticketsAPI)]);
            const workers = await workersResponse.json();
            const tickets = await ticketsResponse.json();

            const activeRoster = workers.map(worker => {
                const activeJobs = tickets.filter(ticket => ticket.userId === worker.id).length;
                return `${worker.name} from ${worker.address.city} currently has ${activeJobs} active job tickets in the database.`;
            });

            return activeRoster;
        } catch (error) {
            console.error("Dashboard initialization failed:", error.message);
            return "Dashboard initialization failed.";
        }
    }
}

// <----------------------------------------------------------->