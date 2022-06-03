import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
  const {_id, name, picture, description, price, quantity} = product;

  const navigate = useNavigate();

  const navigateToPurchase = _id =>{
    navigate(`/purchase/${_id}`)

  }



  return (
      <div> 
            <div>
              <div style={{height:"480px"}} className="shadow-xl ">
              <div className="">
                  <img  className='p-6 w-40 mx-auto' src={picture} />
              </div>
              <div className="card-body items-center text-center">
                  <h2 className="card-title text-primary">{name}</h2>
                  <p className='text-primary'>{description}</p>
                  <p className='text-primary'>Price: {price}</p>
                  <p className='text-primary'>Quantity: {quantity}</p>

                </div>
                  <div className="card-actions flex justify-center items-center">
                  <button onClick={() => navigateToPurchase(_id)} className="btn btn-primary">Buy Now</button>
                  </div>
            </div> 
       </div>
      </div>
  );
};

export default ProductCard;