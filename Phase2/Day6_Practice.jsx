// DAY 6 
// Rendering Lists & Keys

// Syntax
import React from 'react';

const users = [
    { id: 'usr_1', username: 'Ali' },
    { id: 'usr_2', username: 'Sara' }
];

const UserList = () => {
    return (
        <div className="list-container">
            {/* 1. We map over the array.
        2. We return JSX for each item.
        3. We assign the unique database ID to the 'key' prop.
      */}
            {users.map((user) => (
                <div key={user.id} className="user-row">
                    <p>{user.username}</p>
                </div>
            ))}
        </div>
    );
};

export default UserList;

// The Challenge 
// You are building the main directory page for Connect Ustaad.

// You have an array of worker data. You also have the WorkerProfile component you perfected earlier. Your task is to write the WorkerDirectory component.

// The Requirements:

// Use the .map() method to iterate over the availableWorkers array.

// For every worker in the array, render exactly one <WorkerProfile /> component.

// You must pass down the name, profession, hourlyRate, and avatarUrl as props to the <WorkerProfile /> component.

// You must provide the correct unique key to each <WorkerProfile /> component

import React from 'react';
import WorkerProfile from './WorkerProfile';

const availableWorkers = [
  { _id: 'w_001', name: 'Tariq', profession: 'Plumber', rate: 20, avatar: '/tariq.jpg' },
  { _id: 'w_002', name: 'Kamran', profession: 'Carpenter', rate: 25, avatar: '/kamran.jpg' },
  { _id: 'w_003', name: 'Azam', profession: 'Electrician', rate: 18, avatar: '/azam.jpg' }
];

const WorkerDirectory = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      
      {availableWorkers.map((worker) => (
        <WorkerProfile 
          key={worker._id}
          name={worker.name}
          profession={worker.profession}
          hourlyRate={worker.rate}
          avatarUrl={worker.avatar}
        />
      ))}
      
    </div>
  );
};

export default WorkerDirectory;


// Another Task
// The Requirements
// Part 1: The JobCard Component (The Child)

// Must accept four props using destructuring: title, location, budget, and isUrgent.

// Must display the title, location, and budget.

// The Twist: You must use a ternary operator {condition ? "True" : "False"}. If isUrgent is true, render a <span> that says "URGENT". If it is false, render an empty string "" or "Standard".

// Part 2: The JobBoard Component (The Parent)

// Must use .map() to iterate over the activeJobs array.

// Must render one <JobCard /> for every item.

// Must pass the unique key and all four required props down into the <JobCard />.

import React from 'react';

const JobCard = ({ title, location, budget, isUrgent }) => {
  return (
    <div className="card">
      <h3>{title} {isUrgent ? <span className="text-red-500">URGENT</span> : ""}</h3>
      <p>Location: {location}</p>
      <p>Budget: Rs. {budget}</p>
    </div>
  );
}

const activeJobs = [
  { _id: 'job_01', title: 'Fix Leaking Pipe', location: 'Hayatabad', budget: 1500, isUrgent: true },
  { _id: 'job_02', title: 'Install Ceiling Fan', location: 'University Road', budget: 800, isUrgent: false },
  { _id: 'job_03', title: 'Repair Main Gate', location: 'Saddar', budget: 4500, isUrgent: true }
];

const JobBoard = () => {
  return (
    <div className="job-feed">
      {activeJobs.map((job) => (
        <JobCard
          key={job._id}
          title={job.title}
          location={job.location}
          budget={job.budget}
          isUrgent={job.isUrgent} 
        />
      ))}
    </div>
  );
}

export default JobBoard;

// <---------------------------------------------------------->

// Controlled Components

// By making the component "Controlled", you bind the input field directly to a useState variable. Every single time the user presses a keystroke, React updates the state, and the input field simply reflects that state back to the screen. This allows you to validate data in real-time (e.g., instantly warning them if their password is too short).

// Syntax
import React, { useState } from 'react';

const SearchBar = () => {
  // 1. Create the state
  const [query, setQuery] = useState("");

  // 2. Handle the submit event
  const handleSubmit = (e) => {
    e.preventDefault(); // CRITICAL: Stops the browser from refreshing the page!
    console.log("Searching database for:", query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        // 3. Bind the input to the state (Two-way binding)
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button type="submit">Search</button>
    </form>
  );
};

// The Breakdown of e.target.value:
// e stands for the Event object (what just happened).
// target is the specific HTML element that triggered the event (the input box).
// value is the actual text sitting inside that box.

//The Challenge

// You are building the PostJobForm for Connect Ustaad.

// The Requirements:

// Initialize State: Create three separate useState hooks for title, location, and budget. Initialize the first two as empty strings "", and budget as 0.

// The Inputs: Write a <form> containing three <input> fields (text, text, and number) and a submit <button>.

// Two-Way Binding: Attach the correct value and onChange attributes to every single input so they update their respective state variables.

// The Submission: Create a handlePostJob(e) function.

// It must prevent the default page refresh.

// It must create a new object containing the title, location, and budget.

// It must console.log() that new object.

// Wire it up: Attach the handlePostJob function to the <form>'s onSubmit attribute.

import React, { useState } from 'react';

const PostJobForm = () => {
  // 1. Initialize your three state variables here
  const [title , setTitle] = useState("");
  const [location , setLocation] = useState("");
  const [budget , setBudget] = useState(0);
  
  // 2. Write your submit handler here
  const handlePostJob = (e) => {
    e.preventDefault();
    console.log("New Job:", {title , location , budget});
  };

  // 3. Build the UI and bind the inputs
  return (
    <div className="form-container">
      <h2>Post a New Job</h2>
      
      <form onSubmit={handlePostJob}>
        {/* Title Input */}
        <input type="text" placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        {/* Location Input */}
        <input type="text" placeholder='Enter Location' value={location} onChange={(e) => setLocation(e.target.value)} />
        {/* Budget Input */}
        <input type="number" placeholder='Enter Budget' value={budget} onChange={(e) => setBudget(e.target.value)} />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default PostJobForm;

// <----------------------------------------------------------->

// THE BOSS CHALLENGE

// You are building the Worker Task Dashboard for Connect Ustaad. This component must track a list of tasks, allow the user to add new tasks via a form, and render the UI conditionally based on task status.

// The Requirements:

// Complex State: * Initialize a state variable called tasks using the provided default array.

// Initialize a state variable called newTaskInput as an empty string.

// The Form (Controlled Component):

// Bind the <input> to newTaskInput.

// Wire the <form> to trigger handleAddTask.

// The Submission Logic (handleAddTask):

// Prevent the page refresh.

// Create a new object. Give it a random ID (e.g., Date.now()), the title from your input state, and set isPending to true.

// Update the tasks array by adding this new object to it. (Hint: Use the spread operator [...tasks, newTaskObject]).

// Clear the input field so the user can type again.

// The List Rendering (.map):

// Map over the tasks state array inside the UI.

// Render a <div> for each task. Do not forget the key.

// Conditional Rendering:

// Inside the mapped task <div>, render the task title.

// Use a ternary operator to check task.isPending. If true, render <span className="badge-warning">Pending</span>. If false, render <span className="badge-success">Completed</span>.

import React, { useState } from 'react';

const WorkerTaskDashboard = () => {
  // 1. Setup State
  const initialTasks = [
    { id: 1, title: 'Buy copper wire', isPending: false },
    { id: 2, title: 'Call client in Hayatabad', isPending: true }
  ];
  let newTaskInput = "";
  
  const [tasks, setTasks] = useState(initialTasks);
  const [newTaskInput, setNewTaskInput] = useState("");

  // 2. Form Submission Handler
  const handleAddTask = (e) => {
    <form onSubmit={WorkerTaskDashboard}>
      <input type="text" value={newTaskInput} onChange={(e) => setNewTaskInput(e.target.value)} />
    </form>
  };

  // 3. UI Construction
  return (
    <div className="dashboard">
      <h2>My Daily Tasks</h2>
      
      {/* Form Section */}
      <form>
        <input 
          type="text" 
          placeholder="What needs to be done?" 
        />
        <button type="submit">Add Task</button>
      </form>

      {/* List Section */}
      <div className="task-list">
        
        {/* Write your .map() logic here */}
        
      </div>
    </div>
  );
};

export default WorkerTaskDashboard;