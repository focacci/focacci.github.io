import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './components/home';
import Layout from './components/layout';
import About from './components/about';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
