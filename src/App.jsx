import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Youtube from './components/Youtube';
import Instagram from './components/Instagram';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/instagram" element={<Instagram />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
