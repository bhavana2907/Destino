import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
const MysorePalace = () => {
 return (
 <Router>
 <div>
 <h2>Mysore Palace</h2>
 <h3>Location:Mysuru,Karnataka</h3>
 <h3>Nearby Hotels:</h3>
 <ul>
 <li>Lalitha Mahal Palace Hotel</li>
 <li>Radisson Blu Plaza Hotel</li>
 </ul>
 <h3>Distance from Main Stations:</h3>
 <ul>
 <li>Mysuru Junction Railway Station: Approximately 2 km</li>
 </ul>
 <h3>Transportation:</h3>
 <ul>
<li>Easily accessible by auto-rickshaws, taxis, and local buses.</li>
 </ul>
 <h3>Minimum Budget</h3>
 <ul>
 <li>Accommodation: ₹2000 - ₹7000 per day</li>
 <li>Transportation: ₹500 - ₹1500</li>
 <li>Meals and other expenses: ₹1000 - ₹3000 per day</li>
</ul>
 <h3>Nearest Tourist Spots:</h3>
 <ul>
 <li>Chamundi Hills and Chamundeshwari Temple</li>
 <li>Mysore Zoo (Sri Chamarajendra Zoological Gardens)</li>
 <li>Jaganmohan Palace Art Gallery and Auditorium</li>
 </ul>
</div>
</Router>
 );
};
export default MysorePalace;
