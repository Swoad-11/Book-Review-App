import React from 'react';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [review,setReview] = useReview();
    

    return (
        <div className='mt-10 p-10'>
                <h2 className='font-semibold text-5xl text-amber-600'>
                    What Reviewers Say!
                </h2>
            <div className='grid grid-cols-3 gap-5 mt-10 p-6 text-left'>
            {
                review.map(review => <Review
                key={review.id}
                review={review}>
                </Review>)
            }
            </div>
        </div>
    );
};

export default Reviews;