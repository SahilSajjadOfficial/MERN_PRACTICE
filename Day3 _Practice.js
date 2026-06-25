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