import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
  const { id } = useParams({});
  const [items, setItems] = useState({});
  const [user, loading, error] = useAuthState(auth);


    useEffect(() => {
        
        fetch(`http://localhost:5000/product/${id}`)
        .then(response => response.json())
        .then(data => setItems(data))
    }, []);





  
  return (
    <div>
      <div class="hero min-h-screen bg-gradient-to-r from-pink-300  via-purple-400 to-indigo-300  shadow-xl px-12">
          <div class="hero-content border rounded-lg w-4/5 flex-col lg:flex-row-reverse">
            <div class="text-center  p-4 lg:text-left">
              <img className='' src={items.picture} alt="" />
              <h1 class="text-2xl text-center text-white font-bold">{items.name}</h1>
              <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-pink-300  via-purple-400 to-indigo-300">
              <div class="card-body">
                <div class="form-control">
                  <input type="text" value={user?.displayName || ''} disabled class="input input-bordered" />
                </div>
                <div class="form-control">
                  <input type="text" value={user?.email || ''} disabled class="input input-bordered" />
                </div>
                <div class="form-control">
                  <input type="text" placeholder="Address" class="input input-bordered" />
                </div>
                <div class="form-control">
                  <input type="text" placeholder="Phone Number" class="input input-bordered" />
                </div>
                <div class="form-control mt-6">
                  <button class="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Purchase;