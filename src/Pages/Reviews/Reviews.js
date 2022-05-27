import React from 'react';
import ReviewRating from './ReviewRating';

const Reviews = () => {
  return (
    <section className='mt-9'>
      <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
              <div className='text-center mt-16'>
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://api.lorem.space/image/face?hash=3174" />
                </div>
              </div>
                <h1 className='text-white text-3xl font-bold mb-3'> Anda Rasal</h1>
                <p className='text-white w-9/12 mx-auto font-bold mb-3'>It’s incredibly rare that anyone would pick up the phone and call you up with feedback. Instead, your customers take to social media to talk about you. That’s why it’s essential to harness your most public-facing customer service touchpoint and join in on the conversation.
                </p>
                <ReviewRating/>
              </div>
          </div> 
          <div id="item2" className="carousel-item w-full">
          <div id="item1" className="carousel-item w-full">
              <div className='text-center mt-16'>
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://api.lorem.space/image/face?hash=3174" />
                  </div>
                </div>
                <h1 className='text-white text-3xl font-bold mb-3'> Anda Rasal</h1>
                <p className='text-white w-9/12 mx-auto font-bold mb-3'>It’s incredibly rare that anyone would pick up the phone and call you up with feedback. Instead, your customers take to social media to talk about you. That’s why it’s essential to harness your most public-facing customer service touchpoint and join in on the conversation.
                </p>
                <ReviewRating/>
              </div>
          </div>
          </div> 
          <div id="item3" className="carousel-item w-full">
          <div id="item1" className="carousel-item w-full">
              <div className='text-center mt-16'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="https://api.lorem.space/image/face?hash=3174" />
                    </div>
                </div>
                <h1 className='text-white text-3xl font-bold mb-3'> Anda Rasal</h1>
                <p className='text-white w-9/12 mx-auto font-bold mb-3'>It’s incredibly rare that anyone would pick up the phone and call you up with feedback. Instead, your customers take to social media to talk about you. That’s why it’s essential to harness your most public-facing customer service touchpoint and join in on the conversation.
                </p>
                <ReviewRating/>
              </div>
          </div>
          </div> 
          <div id="item4" className="carousel-item w-full">
          <div id="item1" className="carousel-item w-full">
              <div className='text-center mt-16'>
                <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://api.lorem.space/image/face?hash=3174" />
                </div>
              </div>
                <h1 className='text-white text-3xl font-bold mb-3'> Anda Rasal</h1>
                <p className='text-white w-9/12 mx-auto font-bold mb-3'>It’s incredibly rare that anyone would pick up the phone and call you up with feedback. Instead, your customers take to social media to talk about you. That’s why it’s essential to harness your most public-facing customer service touchpoint and join in on the conversation.
                </p>
                <ReviewRating/>
              </div>
          </div>
          </div>
        </div> 
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">1</a> 
          <a href="#item2" className="btn btn-xs">2</a> 
          <a href="#item3" className="btn btn-xs">3</a> 
          <a href="#item4" className="btn btn-xs">4</a>
        </div>
    </section>
  );
};

export default Reviews;