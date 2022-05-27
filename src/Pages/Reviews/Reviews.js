import React from 'react';
import ReviewRating from './ReviewRating';

const Reviews = () => {
  return (
    <section className='mt-9'>
      <div class="carousel w-full">
          <div id="item1" class="carousel-item w-full">
              <div className='text-center mt-16'>
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://api.lorem.space/image/face?hash=3174" />
                </div>
              </div>
                <h1 className='text-white text-3xl font-bold mb-3'> Anda Rasal</h1>
                <p className='text-white w-9/12 mx-auto font-bold mb-3'>It’s incredibly rare that anyone would pick up the phone and call you up with feedback. Instead, your customers take to social media to talk about you. That’s why it’s essential to harness your most public-facing customer service touchpoint and join in on the conversation.
                </p>
                <ReviewRating/>
              </div>
          </div> 
          <div id="item2" class="carousel-item w-full">
          <div id="item1" class="carousel-item w-full">
              <div className='text-center mt-16'>
                <div class="avatar">
                  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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
          <div id="item3" class="carousel-item w-full">
          <div id="item1" class="carousel-item w-full">
              <div className='text-center mt-16'>
                <div class="avatar">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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
          <div id="item4" class="carousel-item w-full">
          <div id="item1" class="carousel-item w-full">
              <div className='text-center mt-16'>
                <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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
        <div class="flex justify-center w-full py-2 gap-2">
          <a href="#item1" class="btn btn-xs">1</a> 
          <a href="#item2" class="btn btn-xs">2</a> 
          <a href="#item3" class="btn btn-xs">3</a> 
          <a href="#item4" class="btn btn-xs">4</a>
        </div>
    </section>
  );
};

export default Reviews;