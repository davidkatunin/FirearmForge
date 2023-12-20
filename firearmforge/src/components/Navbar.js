import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <Link className="navbar-logo">
                LOGO HERE
            </Link>
        </div>
    </nav>
  );
}

export default Navbar