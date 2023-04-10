import React from 'react';
import { Link } from 'react-router-dom';
import Active from '../ActiveLink/Active';

const Header = () => {
    return (
        <nav>
            <Active to='/'>Home</Active>
            <Active to='about'>About</Active>
            <Active to='contact'>Contact</Active>
        </nav>
    );
};

export default Header;