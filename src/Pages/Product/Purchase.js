import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';

const Purchase = () => {
  const { id } = useParams({});
  const [items, setItems] = useState({});
  const [user, loading, error] = useAuthState(auth);


    useEffect(() => {
        
        fetch(`http://localhost:5000/product/${id}`)
        .then(response => response.json())
        .then(data => setItems(data))
    }, []);



    const handleOrder = event =>{
        event.preventDefault();
        const productId = id;
        const userName = user.displayName;
        const userEmail = user.email;
        const address = event.target.address.value;
        const number = event.target.number.value;
        
      const booking = {productId, userName, userEmail, address, number};

      fetch('http://localhost:5000/booking', {
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })

    }




  
  return (
    <div>
      <div class="hero min-h-screen bg-gradient-to-r from-pink-300  via-purple-400 to-indigo-300  shadow-xl px-12">
          <div class="hero-content border rounded-lg w-4/5 flex-col lg:flex-row-reverse">
            <div class="text-center  p-4 lg:text-left">
              <img className='' src={items.picture} alt="" />
              <h1 class="text-2xl text-center text-white font-bold">{items.name}</h1>
              <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>



            <form onSubmit={handleOrder} class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-pink-300  via-purple-400 to-indigo-300">
              <div class="card-body">
                <div class="form-control">
                  <input type="text"  value={user?.displayName || ''} disabled class="input input-bordered" />
                </div>
                <div class="form-control">
                  <input type="text" value={user?.email || ''} disabled class="input input-bordered" />
                </div>
                <div class="form-control">
                  <input type="text" id='address' placeholder="Address" class="input input-bordered" />
                </div>
                <div class="form-control">
                  <input type="number" id='number' placeholder="Phone Number" class="input input-bordered" />
                </div>
                <div class="form-control mt-6">
                  <button class="btn btn-primary">Booked Now</button>
                </div>
              </div>
            </form>


          </div>
        </div>
    </div>
  );
};

export default Purchase;