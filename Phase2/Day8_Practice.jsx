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
