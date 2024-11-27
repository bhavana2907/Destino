import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
const amber= () => {
 return (
 <Router>
 <div>
 <h2>Amber Palace</h2>
 <h3>Location:Jaipur,Rajasthan</h3>
 <h3>Nearby Hotels:</h3>
 <ul>
 <li>Raj Palace</li>
 <li>Trident Jaipur</li>
<li>Hotel Amer View</li>
 </ul>
 <h3>Distance from Main Stations:</h3>
 <ul>
 <li>Jaipur Railway Station: Approximately 11 km.</li>
 <li>Jaipur International Airport: About 21 km.</li>
 </ul>
 <h3>Transportation:</h3>
 <ul>
 <li>Accessible by car, taxi, and auto-rickshaw.</li>
 <li>Public transport options include buses and shared jeeps.</li>
 </ul>
 <h3>Minimum Budget</h3>
 <ul>
 <li>Accommodation: ₹1500 - ₹7500 per day</li>
 <li>Transportation: ₹700 - ₹1800</li>
 <li>Meals and other expenses: ₹1500 - ₹2000 per day</li>
 </ul>
 <h3>Nearest Tourist Spots:</h3>
<ul>
 <li>Jaigarh Fort</li>
 <li>Nahargarh Fort</li>
 <li>Jal Mahal</li>
 </ul>
</div>
</Router>
 );
};
export default amber;
