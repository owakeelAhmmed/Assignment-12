import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {

  const [orders, setOrder] = useState([]);
  console.log(orders)
  const [user] = useAuthState(auth);
  const navigate = useNavigate();


  useEffect(() =>{
   if(user){
    fetch(`https://agile-scrubland-82961.herokuapp.com/booking?email=${user.email}`,{
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
      <h1 className='text-4xl text-primary mt-3 mb-3 text-center font-bold '>Your Order{orders.length}</h1>

      <div className="overflow-x-auto">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Order Name</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                {
                  orders.map((order,index) => <tr>
                    <th className='text-primary'>{index+1} </th>
                    <td className='text-primary'>{user.displayName}</td>
                    <td className='text-primary'>{user.email}</td>
                    <td className='text-primary'>{order.ordername}</td>
                    <td>{(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs bg-green-600'>pay</button></Link>}
                    {(order.price && order.paid) && <div>
                      <span className='text-green-600'>paid</span>
                      </div>
                      }
                    </td>
                  </tr>)
                }
                
              </tbody>
            </table>
      </div>


    </div>
  );
};

export default MyOrder;