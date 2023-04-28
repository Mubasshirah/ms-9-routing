import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
      <nav>
        <Link className='navlink' to='/'>Home</Link>
        <Link className='navlink' to='/about'>About</Link>
        <Link className='navlink' to='/order'>Order</Link>
        <Link className='navlink' to='/grandpa'>Grandpa</Link>
      </nav>
    );
};

export default Header;