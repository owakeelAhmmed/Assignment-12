import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';

const Purchase = () => {
  const { id } = useParams({});
  const [items, setItems] = useState({});
  const [user] = useAuthState(auth);
  

    useEffect(() => {
        fetch(`https://agile-scrubland-82961.herokuapp.com/product/${id}`)
        .then(response => response.json())
        .then(data => setItems(data))
    }, []);



    const handleOrder = event =>{
        event.preventDefault();
        const productId = id;
        const userName = user.displayName;
        const userEmail = user.email;
        const ordername = event.target.ordername.value;
        const address = event.target.address.value;
        const number = event.target.number.value;
        const price = items.price;
        
      const booking = {productId, userName, userEmail, ordername, address, number, price};

      fetch('https://agile-scrubland-82961.herokuapp.com/booking', {
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
      })
      .then(res => res.json())
      .then(data => {
        toast.success('Order Completed')
        event.target.reset();
      })

    }




  
  return (
    <section>
      <div className="hero min-h-screen bg-gradient-to-r from-pink-300  via-purple-400 to-indigo-300  shadow-xl px-12">
          <div className="hero-content border rounded-lg w-4/5 flex-col lg:flex-row-reverse">
            <div className="text-center  p-4 lg:text-left">
              <img className='w-60 mx-auto mb-4' src={items.picture} alt="" />
              <h1 className="text-2xl text-center text-white font-bold">Product Name: {items.name}</h1>
              <p className="py-6  font-bold text-center text-white">Price: {items.price}</p>
              <p className="py-6  font-bold text-center text-white">Quantity: {items.quantity}</p>
            </div>



            <form onSubmit={handleOrder} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-pink-300  via-purple-400 to-indigo-300">
              <div className="card-body">
                <div className="form-control">
                  <input type="text"  value={user?.displayName || ''} disabled className="input input-bordered" />
                </div>
                <div className="form-control">
                  <input type="text" value={user?.email || ''} disabled className="input input-bordered"  />
                </div>
                <div className="form-control">
                  <input type="text" id='ordername' placeholder="Order Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <input type="text" id='address' placeholder="Address" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                  <input type="number" id='number' placeholder="Phone Number" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                  <input type="text" id='text' value={items.quantity} className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <input type="text" id='text'  className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Booked Now</button>
                </div>
              </div>
            </form>


          </div>
        </div>
    </section>
  );
};

export default Purchase;