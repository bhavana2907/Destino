import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUs';
import LoginPage from './pages/Login';
import Footer from './components/Footer';
import './App.css';
function App() {
 return (
 <Router>
 <div className='style1'>
<Header />
 <nav className="navbar">
 <ul>
 <li><Link to="/">Home</Link></li>
 <li><Link to="/destinations">Destinations</Link></li>
 <li><Link to="/AboutUs">About Us</Link></li>
 <li><Link to="/ContactUs">Contact Us</Link></li>
 <li><Link to="/Login">Login</Link></li>
 </ul>
 </nav>
 </div>
 <div>
 <Switch>
 <Route path="/" exact component={HomePage} />
  <Route path="/Destinations" component={DestinationsPage} />
 <Route path="/AboutUs" component={AboutUsPage} />
 <Route path="/ContactUs" component={ContactUsPage} />
 <Route path="/Login" component={LoginPage} />
 </Switch>
 <Footer />
 </div>
 </Router>
 );
}
export default App;

