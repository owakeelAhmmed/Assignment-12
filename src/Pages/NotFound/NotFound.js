import React from 'react';
import img from '../../Images/404.png';




const NotFound = () => {
  return (
    <section className='  mt-10 '>
      <div className='flex justify-center'>
      <img style={{width:'400px'}} src={img} alt="" />
      </div>
      <div>
      <h1 className='text-3xl text-center font-bold'> <span className='text-orange-500'>Not Found</span> <span className='bg-red-500 text-white p-3 rounded-2xl  '>Your Page</span> </h1>
      </div>
    </section>
  );
};

export default NotFound;