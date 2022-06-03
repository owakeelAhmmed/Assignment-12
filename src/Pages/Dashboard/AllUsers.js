import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';


const AllUsers = () => {
  
  


  const {data: users, isLoading, refetch} = useQuery('users', () => fetch('https://agile-scrubland-82961.herokuapp.com/user',
  {
    method: 'GET',
    headers:{
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }
  ).then(Response => Response.json()));


  

  
  if(isLoading){
    return <Loading/>
  }

  return (
    <div>
      <h1 className='text-3xl text-primary mt-3 mb-3 text-center font-bold'> All User: {users.length}</h1>


      <div className="overflow-x-auto">
            <table className="table w-full">
              
              <thead>
                <tr>
                  <th>Count</th>
                  <th>Name</th>
                  <th>Admin </th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user,index) => <UserRow
                  key={user._id}
                  refetch={refetch}
                  index={index}
                  user={user}
                  />)
                }
                </tbody>
            </table>
          </div>

      

      </div>
  );
};

export default AllUsers;







              