import React from 'react';
import Logo from '../../../assets/logo/LogoCSS/Logo.js';
import './NavigationBar.css';
import {NavLink} from 'react-router-dom';

const navigationBar = () => {
  return (
    <div className='NavBar'>
      <div className='Logo'> <NavLink to='/'> <Logo/> </NavLink> </div>
      <div className="Menu">
      <NavLink to='/pictures'> Photographer </NavLink>
      <NavLink to='/videos'> Director </NavLink>
      <NavLink to='/contact'> Contact </NavLink>
      </div>
    </div>
  )
};

export default navigationBar;
