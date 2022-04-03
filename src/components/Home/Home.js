import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className='grid grid-cols-2 p-8 justify-items-center items-center home'>
            <div>
                <img src="./sherlock.png" alt=""/>
            </div>
            <div>
                <div>
                <h1 className='font-bold text-6xl text-amber-600'>Sherlock Holmes</h1>
                <h1 className='font-bold text-4xl mb-4 text-amber-900'>Your Consulting Detective</h1>
                <p>The lowest and vilest alleys in London do not present a more dreadful record of sin than does the smiling and beautiful countryside.</p>
                </div>
                <Link to='/about'>See More</Link>
            </div>
        </div>
    );
};

export default Home;