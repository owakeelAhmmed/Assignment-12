import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';


const CheckoutForm = ({product}) => {
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setclientSecret] = useState('')
  const {_id, price, userEmail, userName} = product;
  
 

  useEffect(() =>{
   
    if(price){
      fetch('https://agile-scrubland-82961.herokuapp.com/create-payment-intent',{
        method: 'POST',
        headers:{
          'content-type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({price})
      })
      .then(res => res.json())
      .then(data => {
          if(data?.clientSecret){
              setclientSecret(data.clientSecret);
          }
      })
    }

  },[price])



  const handleSubmit = async (event) =>{
    event.preventDefault();
    if(!stripe || !elements){
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }


    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

     setCardError(error?.message || '');
     setSuccess('');
     setProcessing(true)

    //  confirm card payment
    const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email:userEmail,
          },
        },
      },
    );
      if(intentError){
        setCardError(intentError?.message)
        setProcessing(false)
      }
      else{
        setCardError('');
        setTransactionId(paymentIntent.id)
        console.log(paymentIntent);
        setSuccess('Your payment is success!');

        const payment = {
          product: _id,
          transactionId: paymentIntent.id
        }


        fetch(`https://agile-scrubland-82961.herokuapp.com/booking/${_id}`, {
          method: 'PATCH',
          headers:{
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(payment)
        }).then(Response => Response.json())
        .then(data => {
          setProcessing(false)
          console.log(data)
        })
      }

  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
      <CardElement 
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || success}>
        Pay
       </button>
    </form>
    <div className='mt-5'>
    {
      cardError && <p className='text-red-500'>{cardError}</p>
    }
    {
      success && <p className='text-green-500 mb-4'>{success}</p>
    }
    {
      transactionId && <p className='text-orange-500'>Id: {transactionId}</p>
    }
    </div>
    </div>
  );
};

export default CheckoutForm;



//https://agile-scrubland-82961.herokuapp.com/