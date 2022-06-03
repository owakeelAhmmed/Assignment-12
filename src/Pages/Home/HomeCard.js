import React from 'react';

const HomeCard = ({hp}) => {
  const {productimage, productname, price, quantity, description} = hp;
  return (
    <section className=''>
       <div style={{height:"480px"}} class="card  bg-base-100 shadow-xl">
               
                <div class="card-body  text-center">
                  <img style={{width:'100px'}} className='mx-auto' src={productimage} alt="" />
                  <h2 class=" text-red-500 text-center mt-5">{productname}</h2>
                  <p>{description}</p>
                  <p>{price}</p>
                  <p>{quantity}</p>
                  </div>
            </div>
    </section>
  );
};

export default HomeCard;