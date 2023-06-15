import '../App.css';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

class Layout extends React.Component {
  render() {
    return (
      <>
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </>
    );
  }
}
  
export default Layout;