import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {

  const [orders, setOrder] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() =>{
   if(user){
    fetch(`http://localhost:5000/booking?email${user.email}`)
    .then(Response => Response.json())
    .then(data => setOrder(data));
   }
  },[user])



  return (
    <div>
      <h1 className='text-center text-4xl'>Your Order{orders.length}</h1>

      <div class="overflow-x-auto">
            <table class="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Order Name</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                {
                  orders.map((order,index) => <tr>
                    <th>{index+1} </th>
                    <td>{user.displayName}</td>
                    <td>{user.email}</td>
                    <td>{order.ordername}</td>
                  </tr>)
                }
                
              </tbody>
            </table>
      </div>


    </div>
  );
};

export default MyOrder;