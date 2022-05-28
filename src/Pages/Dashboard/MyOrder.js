import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {

  const [orders, setOrder] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();


  useEffect(() =>{
   if(user){
    fetch(`http://localhost:5000/booking?email=${user.email}`,{
      method: 'GET',
      headers:{
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(Response => {
      console.log('Response', Response)
      if(Response.status === 401 || Response.status === 403){
          signOut(auth);
          localStorage.removeItem('accessToken');
          navigate('/')
      }
      
      return Response.json();
    })
    .then(data => {
      setOrder(data)
    });
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