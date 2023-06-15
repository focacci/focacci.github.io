import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/home';
import Layout from './pages/layout';
import About from './pages/about';


export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
