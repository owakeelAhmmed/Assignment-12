import React from 'react';

const ReviewRating = () => {
  return (
    <section>
          <div className="rating rating-md rating-half ">
              <input type="radio" name="rating-10" className="rating-hidden" />
              <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-1" />
              <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-2" />
              <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-1"  />
              <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-2" />
              <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-1" />
              <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-2" />
              <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-1" />
              <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-2" />
              <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-1" />
              <input type="radio" name="rating-10" className="bg-orange-500 mask mask-star-2 mask-half-2" />
            </div>
    </section>
  );
};

export default ReviewRating;