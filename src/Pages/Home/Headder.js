import React from 'react';
import img1 from '../../Images/headerimg.jpg';



const Headder = () => {
  return (
    <div>
      <div className="hero " >
          <div className="hero-overlay bg-opacity-60">
          <img className='' src={img1} alt="" />
          </div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl text-primary font-bold">Hello there</h1>
              <p className="mb-5 text-primary font-bold">A tool is an object that can extend an individual's ability to modify features of the surrounding environment.</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Headder;