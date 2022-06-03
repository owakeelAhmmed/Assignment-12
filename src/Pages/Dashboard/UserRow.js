import React from 'react';
import toast from 'react-hot-toast';

const UserRow = ({user, refetch, index}) => {
      const {email, role} = user;

      const makeAdmin = () =>{
        fetch(`https://agile-scrubland-82961.herokuapp.com/user/admin/${email}`,{
          method: 'PUT',
          headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
            
          }
        })
        .then(Response => 
          {
          if(Response.status === 403){
            toast.error('Your are not admin!!')
          }
         return Response.json()}
         )
        .then(data => 
          {
            if(data.modifiedCount > 0){
            
              refetch();
              toast.success('Admin Created Successfully')
            
            }
        }
        
        )
      }



  return (
    
            <tr>
                <th className='text-primary'>{index+1}</th>
                <td className='text-primary'>{email}</td>
                <td className='text-primary'>{ role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Create Admin</button>}</td>
                
            </tr>


           
    
  );
};

export default UserRow;