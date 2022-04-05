import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <nav className='flex flex-row justify-center gap-4 mt-6 mb-6 font-medium'>
            <CustomLink to="/"></CustomLink>
            <CustomLink to="/home"><span>HOME</span></CustomLink>
            <CustomLink to="/reviews"><span>REVIEWS</span></CustomLink>
            <CustomLink to="/dashboard"><span>DASHBOARD</span></CustomLink>
            <CustomLink to="/blogs"><span>BLOGS</span></CustomLink>
            <CustomLink to="/about"><span>ABOUT</span></CustomLink>
        </nav>
    );
};

export default Header;