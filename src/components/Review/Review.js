import React from 'react';
import './Review.css'

const Review = (props) => {
    const {first_name,rating,img,text} = props.review;
    console.log(props.review);
    return (
        <div className='p-6 border-solid border-2 border-amber-600 rounded-lg'>
            <img className='rounded-full mx-auto mb-2' src={img} alt="" />
            <hr />
            <div className='mt-2'>
            <h3><span className='font-medium'>Name:</span> {first_name}</h3>
            <h4><span className='font-medium'>Rating:</span> {rating}/5</h4>
            <p>{text}</p>
            </div>
        </div>
    );
};

export default Review;