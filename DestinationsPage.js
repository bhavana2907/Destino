import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'D:/1214 react/project/src/components/Destinations.css';
import TajMahal from'D:/1214 react/project/src/pages/TajMahal';
import Amberpalace from'D:/1214 react/project/src/pages/Amberpalace';
import RedFort from'D:/1214 react/project/src/pages/RedFort';
import Mysorepalace from'D:/1214 react/project/src/pages/Mysorepalace';
import GoldenTemple from'D:/1214 react/project/src/pages/GoldenTemple';
const DestinationsPage = () => {
 return (
 <Router>
 <section >
 <div className='des'>
 <h1 align="center">Popular Destinations</h1>
 <table> <tr>
 <td>
