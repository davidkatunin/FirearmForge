import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar_top">
        <div className="navbar-container">
            <a href="#" className="navbar-logo"><s className="logo-red">Firearm</s><s className="logo-orange">Forge</s></a>
          <ul className="nav_user-info">
            <li className="nav_account li_top">
              <button className="nav_account-btn">Account</button>
            </li>
            <li className="nav_state li_top">
              State
            </li>
            <li className="nav_mode li_top">
              Switch
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar