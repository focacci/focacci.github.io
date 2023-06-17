import './nav-bar.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <ul id="navigation">
        <li>
          <div>
            <Link to="/">Home</Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/about">About</Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}
