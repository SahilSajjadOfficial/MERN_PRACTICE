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