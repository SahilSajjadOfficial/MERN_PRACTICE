// Turning HTML into JSX

// following is the html

function WorkerProfile() {
  return (
    <div class="card">
      <img src="https://api.connectustaad.com/avatars/ali.jpg" alt="Profile Picture">
      <div class="details">
        <h2>Ali - Electrician</h2>
        <p>Hourly Rate: $15<br>Status: Available</p>
      </div>
    </div>
    <button class="btn-primary">Book Now</button>
  )
}

// Below is the JSX code for the above HTML

import React from 'react'

const WorkerProfile = () => {
  return (
    <div className='card'>
        <img src="https://api.connectustaad.com/avatars/ali.jpg" alt="Profile Picture" />
        <h2>Ali-Electrician</h2>
        <p>Hourly Rate : 15$ <br />Status : Available</p>
        <button className='btn-primary'>Book Now</button>
    </div>
  )
}

export default WorkerProfile

// <------------------------------------------------------------->

// Props & State

// Syntax

import React, { useState } from 'react';

// 1. Destructuring 'title' and 'price' from the incoming props object
const ProductCard = ({ title, price }) => {
  
  // 2. Initializing State. 
  // 'inCart' is the variable. 'setInCart' is the function used to change it.
  // We start it at false.
  const [inCart, setInCart] = useState(false);

  const handleAdd = () => {
    setInCart(true); // 3. Mutating state tells React to re-render this UI
  };

  return (
    <div className="border p-4">
      <h3>{title}</h3>
      <p>${price}</p>
      
      {/* 4. Conditional Rendering based on State */}
      <button onClick={handleAdd}>
        {inCart ? "Added to Cart" : "Add Item"}
      </button>
    </div>
  );
};

export default ProductCard;


// THE CHALLENGE

{/* We are going to upgrade your WorkerProfile to be production-ready.

Rewrite your component to fulfill these strict requirements:

Accept Props: The component must accept name, profession, hourlyRate, and avatarUrl as props. Use object destructuring in the parameters.

Inject Props: Replace the hardcoded "Ali", "Electrician", "15$", and image URL with your dynamic props using {}.

Initialize State: Import useState and create a boolean state variable called isBooked. Start it at false.

The Interaction: Add an onClick event to the button. When clicked, it must update isBooked to true.

Conditional UI: Using a ternary operator (condition ? true : false), make the button text dynamic. If isBooked is true, the button should display "Booking Requested". If false, it should display "Book Now". */}

import React, { useState } from 'react'

const WorkerProfile = ({name , profession , hourlyRate , avatarUrl}) => {
  // Your logic goes here
  const [isBooked , setIsBooked] = useState(false);
  const handleBooking = () => {
    setIsBooked(true);
  };

  return (
    <div className='card'>
        <img src= {avatarUrl} alt="Profile Picture" />
        <h2>Name:{name} - {profession}</h2>
        <p>Hourly Rate :{hourlyRate} <br />Status : Available</p>
        <button className='btn-primary' onClick={handleBooking}>{isBooked ? "Booking Requested" : "Book Now"}</button>
    </div>
  )
}

export default WorkerProfile

// <---------------------------------------------------------->