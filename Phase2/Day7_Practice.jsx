// Day 7
// useState

// Usage 
// Adding state to a component 
// Call useState at the top level of your component to declare one or more state variables.

import { useState } from 'react';

function MyComponent() {
    const [age, setAge] = useState(42);
    const [name, setName] = useState('Taylor');
}
//   // ...
// The convention is to name state variables like [something, setSomething] using array destructuring.

// useState returns an array with exactly two items:

// The current state of this state variable, initially set to the initial state you provided.
// The set function that lets you change it to any other value in response to interaction.
// To update what’s on the screen, call the set function with some next state:

function handleClick() {
    setName('Robin');
}
// React will store the next state, render your component again with the new values, and update the UI.

// Pitfall
// Calling the set function does not change the current state in the already executing code:

function handleClick() {
    setName('Robin');
    console.log(name); // Still "Taylor"!
}
// It only affects what useState will return starting from the next render.

// The syntax
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            Clicked {count} times
        </button>
    );
}

// The Challenge
// Below is a broken component. The goal is to build a scoreboard that increases by 2 every time the user clicks the "Add 2" button. However, when you click it, the score only increases by 1.

import { useState } from 'react';

export default function ScoreBoard() {
    const [score, setScore] = useState(0);

    const handleScoreIncrease = () => {
        setScore(score + 1);
        setScore(score + 1);
    };

    return (
        <div>
            <h2>Score: {score}</h2>
            <button onClick={handleScoreIncrease}>Add 2</button>
        </div>
    );
}

// The Task
// Tell me conceptually why this bug is happening based on how React processes state updates.

// Write the corrected handleScoreIncrease function completely from scratch.

1 . Answer : The bug is happening because there is a pitfall when you write
setScore(score + 1);
setScore(score + 1);
this score will get the value of the 0 that is being passed in the useState. and it do not update the value of the variable score it would remain the same 0.

2. Solution
import { useState } from 'react';

export default function ScoreBoard() {
    const [score, setScore] = useState(0);
    const handleScoreIncrease = () => {
        setScore(a => a + 1); // using an updater
        setScore(a => a + 1);
    
};
return (
    <div>
        <h2>Score : {score}</h2>
        <button onClick={handleScoreIncrease}>Add 2</button>
    </div>
);
}

// <-------------------------------------------------------------->

// useEffect

// In your MERN stack, you will use useEffect constantly to fetch data from your Node/Express API the moment a component loads on the screen.

// The Pitfall: The single most common React bug in existence is the infinite loop. If you fetch data inside a useEffect, save it to state using useState, but forget to manage your dependency array properly, the state update triggers a re-render. That re-render triggers the useEffect again, which fetches data, updates state, triggers a re-render... and your app crashes your browser and spams your backend API.


// Syntax

import { useState, useEffect } from 'react';

function UserProfile() {
  const [data, setData] = useState(null);

  // 1. The effect function
  // 2. The dependency array (empty means run ONCE on mount)
  useEffect(() => {
    // Connect to external system / fetch data here
  }, []); 

  return <div>Profile</div>;
}

// The Challenge
// You are building a component that fetches a specific user's details from your Express backend whenever the userId prop changes.

// Below is the code. It currently has a massive bug. When the component mounts, it works. But when the userId changes, the component does not fetch the new user's data. It is stuck showing the first user.

import { useState, useEffect } from 'react';

export default function UserDetails({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://api.example.com/users/${userId}`);
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, []); // <-- Look closely here

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

Your Task:

Explain conceptually why the component is failing to update when the userId prop changes. How is React interpreting this hook?

Write the corrected useEffect block completely from scratch.