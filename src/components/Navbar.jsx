import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="bg-black text-white flex gap-5 justify-center p-5 text-xl font-bold font-mono mb-5">
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-white')}
        >
          Home
        </NavLink>
        <NavLink 
          to="/youtube" 
          className={({ isActive }) => (isActive ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-white')}
        >
          Youtube
        </NavLink>
        <NavLink 
          to="/instagram" 
          className={({ isActive }) => (isActive ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-white')}
        >
          Instagram
        </NavLink>
        <NavLink
          to="/amazon"
          className={({ isActive }) => (isActive ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-white')}>
          Amazon
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
