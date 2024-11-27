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
  <img src="https://images.unsplash.com/photo-1564507592333-
c60657eea523?q=80&w=1000&auto=format&fit=crop&ixlib=rb4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8M
Hx8fDA%3D" width="60%" height="60%" alt="Taj Mahal"></img><br/>
 <br/><Link to="/tajmahal">Taj Mahal</Link> </td>
 <td>
 <Switch>
 <Route path="/tajmahal" component={TajMahal}/>
 </Switch>
 </td>
 </tr>
 <br/>
 <tr>
 <td>
 <img src="https://w0.peakpx.com/wallpaper/159/511/HD-wallpaper-amber-fortjaipur-bing-amer-fort.jpg"width="60%" height="60%" alt="Amber Palace"></img><br/>
 <br/><Link to="/Amberpalace">Amber Palace</Link> </td>
 <td>
 <Switch>
 <Route path="/Amberpalace" component={Amberpalace}/>
 </Switch>
</td>
 </tr>
 <br/>
 <tr>
 <td>
 <img
src="https://t4.ftcdn.net/jpg/03/56/31/17/360_F_356311787_4j9CXZfn1F4Vp2mWRLkHzkL
wOf8ofSsZ.jpg" width="60%" height="60%" alt="Red Fort"></img><br/>
 <br/><Link to="/redfort">RedFort</Link>
 </td>
 <td>
 <Switch>
<Route path="/redfort" component={RedFort}/>
 </Switch>
 </td>
 </tr>
 <br/>
 <tr>
 <td>
 <img src="https://karnatakatourism.org/wp-content/uploads/2020/12/mysurupalace.jpg" width="60%" height="50%" alt="Mysore Palace"></img><br/>
 <br/><Link to="/Mysorepalace">Mysore Palace</Link>
 </td>
 <td>
 <Switch>
 <Route path="/Mysorepalace" component={Mysorepalace}/>
 </Switch>
 </td>
 </tr>
 <br/>
 <tr>
 <td>
<img
src="https://t3.ftcdn.net/jpg/03/11/74/00/360_F_311740081_PL7ftGHnZL7JMBQpigswigY2
xFwSRHJg.jpg" width="60%" height="60%" alt="Golden Temple"></img><br/>
 <br/><Link to="/Goldentemple">Golden Temple</Link>
 </td>
 <td>
 <Switch>
 <Route path="/Goldentemple" component={GoldenTemple}/>
 </Switch>
 </td>
 </tr>
 <br/>
 </table>
</div>
 </section>
 </Router>
 );
}
export default DestinationsPage;
