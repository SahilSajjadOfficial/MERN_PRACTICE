// Day 8

// Client Side Routing
// Traditional websites request a brand new HTML document from the server every time you click a link, causing the screen to flash white. React builds Single Page Applications (SPAs). There is only ever one HTML file. When a user navigates, React Router intercepts the URL change, stops the browser from talking to the server, and simply swaps out the React components on the screen to match the new URL. This makes navigation feel instantaneous.

// Pitfall
// The most common rookie mistake is using standard HTML anchor tags (<a href="/page">) for internal navigation. An anchor tag forces the browser to do a hard refresh, which completely wipes out your React Virtual DOM, all your useState data, and your Redux store. In React Router, you must use their custom <Link> component instead.

// Syntax

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() { return <h2>Home Page</h2>; }
function Dashboard() { return <h2>Dashboard</h2>; }

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        {/* Use Link instead of <a> tags */}
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

// The Challenge

// You are building the top navigation bar for your platform. The routes are correctly set up to handle client-side routing for the /about and /contact pages.

// However, there is a critical architectural flaw in the navigation bar. Every time you click "About Us", the entire browser tab flashes, the page reloads, and any active state (like a user being logged in) gets completely destroyed.

import { BrowserRouter, Routes, Route , Link } from 'react-router-dom';
// Is there an import missing up here? (Answer Yes Link)

function About() { return <h2>About Us</h2>; }
function Contact() { return <h2>Contact Support</h2>; }

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        {/* THE BUG IS IN THESE TWO LINES */}
        {/* <a href="/about">About Us</a>
        <a href="/contact">Contact</a> */}
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

// Your Task:
// Identify the bug causing the hard page reloads, and write the corrected code for the nav block from scratch, including any necessary imports you need to add to the top of the file to make it work.

// <------------------------------------------------------------------>

// Controlled Components (Forms)

// A component is considered a Controlled Component when the values of its form input fields (like text inputs, checkboxes, etc.) are entirely handled and driven by React State rather than the DOM itself.

// The input value displayed on the UI and the React state variable are always in sync.

// How Does a Controlled Component Work?
// A typical controlled component setup relies on three core pillars:

// State Integration: A state hook (useState) is used to store the input field's data.

// On-Change Event handler: An onChange event listener is attached to the input. Every time the user types, the handler intercepts the keystroke and immediately updates the state using event.target.value.

// Value Binding: The value attribute of the HTML input element is directly bound to the React state variable

// Setup: The instructor creates three distinct input fields for Name, Password, and Email, alongside corresponding states (name, password, email).

// Binding: Each input is given an onChange handler that updates its specific state, and the text is simultaneously displayed live on the UI using JSX tags.

// Dynamic Clearing: A Clear button is implemented with an onClick event that resets all three states to empty strings (""). Because the inputs' value attributes are bound to these states, clicking the button instantly wipes the text boxes clean on the screen.

// Syntax 
import { useState } from 'react';

function SimpleForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // <-- This blocks the dreaded page reload!
    console.log("Submitted name:", name);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* The input's value is locked to the state */}
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button type="submit">Save</button>
    </form>
  );
}

// The Challenge 
// Your Task:
// Identify the two missing pieces of code causing the frozen input and the hard page reload. Rewrite the handleLogin function and the <input> element completely from scratch to fix both bugs.

import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    // We need to stop the page from reloading here. How?
    e.preventDefault(); // use to stop the page from reloading.
    console.log("Attempting to log in with:", email);
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Connect Ustaad Login</h2>
      
      {/* BUG: This input is completely frozen */}
      <input 
        type="email" 
        placeholder="Enter your email" 
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
      />
      
      <button type="submit">Login</button>
    </form>
  );
}