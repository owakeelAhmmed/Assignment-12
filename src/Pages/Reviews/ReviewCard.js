import React from 'react';
import ReviewRating from './ReviewRating';

const ReviewCard = ({review}) => {
    const {_id, photo, name, description, rating} = review;



  return (
    <section className='mt-9'>
    

        <div className=' '>
        <div class="card  bg-base-100 shadow-xl">
          <div class="card-body">
          <div className="avatar">
              <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={photo} alt="" />
              </div>
            </div>
          <h1 className='text-primary text-center text-3xl font-bold mb-3'> {name}</h1>
              <p className='text-primary text-center font-bold mb-3'>{description}</p>
              <p className='text-primary text-center font-bold mb-3'>{rating}</p>
              <ReviewRating/>
          </div>
        </div>

        </div>
  </section>
  );
};

export default ReviewCard;