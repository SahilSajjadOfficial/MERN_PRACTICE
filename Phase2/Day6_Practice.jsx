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