import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51L4rrIIirdAPi8uOXsP7P1tncLAP04M58JCIgvKIx8pE7VvJZPEWMIHmfjmLDTVhl3O9kchaMFoGE2lTPLKXbDkw00I7FJZpie');



const Payment = () => {
  const {id} = useParams();
  const url = `https://agile-scrubland-82961.herokuapp.com/booking/${id}`;

  const {data: product, isLoading} = useQuery(['booking', id], () => fetch(url, 
      {
        method: 'GET',
        headers:{
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
          
        }
      })
    .then(res=>res.json()))

    if(isLoading){
      return <Loading/>
    }



  return (
    <div className='flex justify-center mt-52  gap-4'>
           <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title w-96 font-bold text-primary">Name: {product.userName}</h2>
              <p className=' text-primary'>Product Name: {product.ordername}</p>
              <p className=' text-primary'>Price: {product.price}</p>
              </div>
          </div>
           <div className="card  w-96 bg-base-100 shadow-xl">
            <div className="card-body">

            <Elements stripe={stripePromise}>
                  <CheckoutForm product={product} />
                </Elements>

            </div>
          </div>
    </div>  
  );
};

export default Payment;