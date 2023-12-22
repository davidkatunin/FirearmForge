import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <Link className="navbar-logo">
                LOGO HERE
            </Link>
          <ul className="nav_user-info">
            <li className="nav_account">
              
            </li>
            <li className="nav_state">

            </li>
            <li className="nav_mode">

            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar