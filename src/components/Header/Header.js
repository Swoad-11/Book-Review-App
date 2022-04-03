import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='flex flex-row justify-center gap-4 mt-6 mb-6'>
            <CustomLink to="/"></CustomLink>
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/review">Review</CustomLink>
            <CustomLink to="/dashboard">Dashboard</CustomLink>
            <CustomLink to="/blogs">Blogs</CustomLink>
            <CustomLink to="/about">About</CustomLink>
        </nav>
    );
};

export default Header;