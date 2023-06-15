import './nav-bar.css';
import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <ul id="navigation">
          <li>
            <a>
              <Link to="/">Home</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="/about">About</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="/contact">Contact</Link>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;