import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
// import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {

      fetch('https://agile-scrubland-82961.herokuapp.com/reviews')
      .then(Response => Response.json())
      .then(data => setReviews(data))

    },[])




  return (
    <section className="px-12">
          <div className='grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
              reviews.map(review => <ReviewCard
              key={review._id}
              review={review}             
              />)
            }
          </div>
    </section>
  );
};

export default Reviews;