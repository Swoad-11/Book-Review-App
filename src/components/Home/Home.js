import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [review,setReview] = useReview();
    
    return (
        <div className='p-8'>
            <section className='grid grid-cols-2 justify-items-center items-center home'>
            <div className='book-image'>
                <img className='border-double border-4 border-amber-500' src="./sherlock.png" alt=""/>
            </div>
            <div>
                <div>
                <h1 className='font-bold text-6xl text-amber-600'>Sherlock Holmes</h1>
                <h1 className='font-bold text-4xl mb-4 text-amber-900'>Your Consulting Detective</h1>
                <p className='font-medium'>The lowest and vilest alleys in London do not present a more dreadful record of sin than does the smiling and beautiful countryside.</p>
                </div>
                <button className='px-4 py-2 font-semibold text-sm bg-white text-white dark:bg-amber-600 hover:bg-amber-700 rounded-lg mt-4'><Link to='/about'>See More</Link></button>
            </div>
            </section>
            <section className='mt-10 p-10'>
                <h2 className='font-bold text-5xl text-amber-600'>
                    User Reviews
                </h2>
            <div className='grid grid-cols-3 gap-5 mt-10 p-6 text-left'>
            {
                review.map(review => <Review
                key={review.id}
                review={review}>
                </Review>)
            }
            </div>
            </section>
        </div>
    );
};

export default Home;