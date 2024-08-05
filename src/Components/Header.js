import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>AI-Generated Image Detection</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/upload">Upload Image</Link></li>
        <li><Link to="/results">Classification Results</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
