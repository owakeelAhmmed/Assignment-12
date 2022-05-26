import React from 'react';
import img1 from '../../Images/red-sports-bike.jpg';
import Cards from '../Summary/cards';



const Summary = () => {
  return (
    <section className=' bg-gradient-to-r from-pink-300  via-purple-400 to-indigo-300 px-12'>
          <div className=''>
            <h1 className='text-primary text-4xl text-center font-bold'>Project Summary</h1>
          </div>
       
          <div className="card mb-3 mt-16 lg:card-side bg-primary shadow-xl">
            <img className='max-w-lg h-75' src={img1} alt="Album"/>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary">Listen</button>
              </div>
            </div>
          </div>


{/* //feedback card  */}

          <div className=''>
            <Cards/>
          </div>

          
    </section>
  );
};

export default Summary;