import '../App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './nav-bar/nav-bar';

class Layout extends React.Component {
  render() {
    return (
      <div className='Layout'>
        <NavBar />
        <Outlet />
      </div>
    );
  }
}
  
export default Layout;