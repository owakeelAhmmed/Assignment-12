import React from 'react';
import img1 from '../../Images/red-sports-bike.jpg';
import Cards from '../Summary/cards';



const Summary = () => {
  return (
    <section className=' bg-gradient-to-r sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 from-pink-300  via-purple-400 to-indigo-300 px-12'>
          <div className=''>
            <h1 className='text-primary text-4xl text-center font-bold'>Project Summary</h1>
          </div>
       
          <div class="card mb-3 mt-16 lg:card-side bg-primary shadow-xl">
            <img className='max-w-lg h-75' src={img1} alt="Album"/>
            <div class="card-body">
              <h2 class="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-secondary">Listen</button>
              </div>
            </div>
          </div>


{/* //feedback card  */}

          <div>
            <Cards/>
          </div>

          
    </section>
  );
};

export default Summary;