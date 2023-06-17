import '../App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './nav-bar/nav-bar';

export default function Layout() {
  return (
    <div className='Layout'>
      <NavBar />
      <Outlet />
    </div>
  );
}
