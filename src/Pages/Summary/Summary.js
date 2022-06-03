import React from 'react';
import img1 from '../../Images/construction-worker.jpg';
import Cards from '../Summary/cards';



const Summary = () => {
  return (
    <section className=' px-12'>
          <div className=''>
            <h1 className='text-primary text-4xl text-center mt-20 font-bold'>Project Summary</h1>
          </div>
       
          <div className="card mb-3 mt-16 lg:card-side bg-primary shadow-xl">
            <img className='max-w-lg h-75' src={img1} alt="Album"/>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>tool, an instrument for making material changes on other objects, as by cutting, shearing, striking, rubbing, grinding, squeezing, measuring, or other processes. A hand tool is a small manual instrument traditionally operated by the muscular strength of the user, and a machine tool is a power-driven mechanism used to cut, shape, or form materials such as wood and metal. Tools are the primary means by which human beings control and manipulate their physical environment.</p>
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