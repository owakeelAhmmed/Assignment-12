import { useEffect, useState } from "react";



const useAdmin = user => {
  const [admin, setAdmin] = useState(false);

  useEffect( () => {
    const email = user?.email;
    if(email){
      fetch(`https://agile-scrubland-82961.herokuapp.com/admin/${email}`,{
      method: 'GET',
      headers:{
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
        
      }
    })
    .then(Response =>Response.json())
    .then(data => {
        setAdmin(data.admin)
    })
    }
  }, [user])

  return [admin]


}

export default useAdmin;