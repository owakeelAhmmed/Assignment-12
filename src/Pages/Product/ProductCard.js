import React from 'react';

const ProductCard = ({product}) => {
  const {name, picture} = product;


  return (
    <div>
      <div >
          <div class="bg-gradient-to-r from-pink-300  via-purple-400 to-indigo-300 card bg-base-100 shadow-xl">
              <figure class="px-10 pt-10">
                <img src={picture} />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>   
          </div>
      </div>
  );
};

export default ProductCard;