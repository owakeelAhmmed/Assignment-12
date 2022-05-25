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
                <img className=' w-20' src={img1} alt="" />
                </div>
                <h2 className="card-title justify-center mt-1">Card title!</h2>
                <p className='justify-center'>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          <div className="card  bg-primary shadow-xl">
              <div className="card-body">
                <div className="flex justify-center">
                <img className=' w-20' src={img2} alt="" />
                </div>
                <h2 className="card-title justify-center mt-1">Card title!</h2>
                <p className='justify-center'>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          <div className="card  bg-primary shadow-xl">
              <div className="card-body">
                <div className="flex justify-center">
                <img className=' w-20' src={img3} alt="" />
                </div>
                <h2 className="card-title justify-center mt-1">Card title!</h2>
                <p className='justify-center'>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          <div className="card  bg-primary shadow-xl">
              <div className="card-body">
                <div className="flex justify-center">
                <img className=' w-20' src={img4} alt="" />
                </div>
                <h2 className="card-title justify-center  mt-1">Card title!</h2>
                <p className="justify-center">If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
        </div>
    </section>
  );
};

export default cards;