import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
const golden = () => {
 return (
 <Router>
 <div>
 <h2>Golden Temple</h2>
 <h3>Location:Amritsar, Punjab</h3>
 <h3>Nearby Hotels:</h3>
 <ul>
 <li>Hotel City Park</li>
 <li>Hotel CJ International</li>
 </ul>
 <h3>Distance from Main Stations:</h3>
 <ul>
 <li>Amritsar Junction Railway Station: Approximately 3 km.</li>
 </ul>
 <h3>Transportation:</h3>
 <ul>
<li>Easily accessible by auto-rickshaws, taxis, and local buses.</li>
 </ul>
 <h3>Minimum Budget</h3>
 <ul>
 <li>Accommodation: ₹1500 - ₹6000 per day</li>
 <li>Transportation: ₹100 - ₹1000</li>
 <li>Meals and other expenses: ₹1000 - ₹4000 per day</li>
 </ul>
 <h3>Nearest Tourist Spots:</h3>
 <ul>
 <li>Jallianwala Bagh</li>
 <li>Akal Takht</li>
 <li>Durgiana Temple</li>
 </ul>
</div>
</Router>
 );
};
export default golden;
