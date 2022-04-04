import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-2 p-16 gap-6 '>
            <div className='bg-green-100 rounded-lg'>
                <h3 className='mt-2 font-bold text-lg'>What is context API?</h3>
                <p className='text-left p-4'>
                <span className='font-medium'>Answer:</span>
                </p>
            </div>
            <div className='bg-red-100 rounded-lg'>
            <h3 className='mt-2 font-bold text-lg'>What is semantic tag?</h3>
                <p className='text-left p-4'>
                    <span className='font-medium'>Answer:</span>
                </p>
            </div>
        </div>
    );
};

export default Blogs;