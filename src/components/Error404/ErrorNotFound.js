import React from 'react';
import { Link } from 'react-router-dom';

const ErrorNotFound = () => {
    return (
        <div className='mt-24'>
            <h1 className='font-bold text-7xl text-red-700'>404</h1>
            <h3 className='font-bold text-3xl text-amber-800 mb-16'>Page Not Found!!</h3>
            <button className="px-4 py-2 font-semibold text-sm bg-white text-white dark:bg-amber-600 hover:bg-amber-700 rounded-lg mt-4">
                <Link to="/home">Back To Home</Link>
            </button>
        </div>
    );
};

export default ErrorNotFound;