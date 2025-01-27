import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="container-fluid navbar-expand-lg">
    <nav className="navbar">
      <div class = "left">
      <img class = "logo" src = "/anagolay.png" alt = "logo" ></img>
            <h1 class = "title">Anagolay - Lost & Found at Uni</h1>
      </div>
      <div class = "right">
      <ul className="nav-links">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Report" activeClassName="active">Report Lost Item</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Find" activeClassName="active">Found Items</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/History" activeClassName="active">History</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Login" activeClassName="active">Log-in</NavLink>
            </li>
          </ul>
{/*         <li><Link to="/">Home</Link></li>
        <li><Link to="/Report">Report Lost Item</Link></li>
        <li><Link to="/Find">Found Items</Link></li>
        <li><Link to="/History">History</Link></li> */}
        </div>
    </nav>
    
    </div>
  );
}

export default Navbar;