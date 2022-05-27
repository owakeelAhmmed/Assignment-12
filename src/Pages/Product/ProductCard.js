import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
  const {_id, name, picture} = product;

  const navigate = useNavigate();

  const navigateToPurchase = _id =>{
    navigate(`/purchase/${_id}`)

  }



  return (
    <div> 
      <div >
          <div className="bg-gradient-to-r from-pink-300  via-purple-400 to-indigo-300 card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={picture} />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button onClick={() => navigateToPurchase(_id)} className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>   
          </div>
      </div>
  );
};

export default ProductCard;