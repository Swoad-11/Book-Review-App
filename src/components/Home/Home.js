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
                <button className='px-4 py-2 font-semibold text-sm bg-white text-white dark:bg-amber-600 hover:bg-amber-700 rounded-lg mt-4'><Link to='/about'>See More</Link></button>
            </div>
        </div>
    );
};

export default Home;