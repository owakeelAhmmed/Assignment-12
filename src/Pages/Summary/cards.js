import React from 'react';
import img1 from '../../Images/flag.png';
import img2 from '../../Images/write.png';
import img3 from '../../Images/person.png';
import img4 from '../../Images/feedback.png';


const cards = () => {
  return (
    <section>
        <div className=' grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-3 '>
        <div className="card  bg-primary shadow-xl">
              <div className="card-body">
                <div className="flex justify-center">
                <img className=' w-10' src={img1} alt="" />
                </div>
                <h2 className="card-title justify-center mt-1">Countries</h2>
                <p className=' text-center text-white font-bold text-2xl'>66</p>
              </div>
            </div>
          <div className="card  bg-primary shadow-xl">
              <div className="card-body">
                <div className="flex justify-center">
                <img className=' w-10' src={img2} alt="" />
                </div>
                <h2 className="card-title justify-center mt-1">Complete Project</h2>
                <p className='text-center text-white font-bold text-2xl'>823+</p>
              </div>
            </div>
          <div className="card  bg-primary shadow-xl">
              <div className="card-body">
                <div className="flex justify-center">
                <img className=' w-12' src={img3} alt="" />
                </div>
                <h2 className="card-title justify-center mt-1">Happy Clients</h2>
                <p className='text-center text-white font-bold text-2xl'>530+</p>
              </div>
            </div>
          <div className="card  bg-primary shadow-xl">
              <div className="card-body">
                <div className="flex justify-center">
                <img className=' w-10' src={img4} alt="" />
                </div>
                <h2 className="card-title justify-center  mt-1">Feedbacks</h2>
                <p className="text-center text-white font-bold text-2xl">623+</p>
              </div>
            </div>
        </div>
    </section>
  );
};

export default cards;