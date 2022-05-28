import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const AllUsers = () => {
  const [user] = useAuthState(auth);
  const makeAdmin = () =>{
    fetch(`http://localhost:5000/user/admin/${user.email}`,{
      method: 'PUT',
      headers:{
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(Response => Response.json())
    .then(data => {
      refetch();
      console.log(data)
      toast.success('admin created')
    })
  }





  const {data: users, isLoading, refetch} = useQuery('users', () => fetch('http://localhost:5000/user',{
    method: 'GET',
    headers:{
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(Response => Response.json()));


  
  if(isLoading){
    return <Loading/>
  }

  return (
    <div>
      <h1 className='text-3xl'>hello user: {users.length}</h1>


      <div class="overflow-x-auto">
            <table class="table w-full">
              
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                
                {
                  users.map((user, index) => 
                  <tr>
                    <th>{index +1}</th>
                    <td>{user.email}</td>
                    {/* <td> <button onClick={makeAdmin} class="btn btn-xs">Create Admin</button></td> */}
                    <td>{ user.role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Create Admin</button>}</td>
                    <td><button class="btn btn-xs btn-error">delete user</button></td>
                </tr>
                  )
                }
                
                
                </tbody>
            </table>
          </div>

      

      </div>
  );
};

export default AllUsers;