import { useEffect, useState } from "react"


const useToken = user =>{
  const [token, setToken] = useState('');


  useEffect(() =>{

    const email = user?. user?.email;
    const currenUser = {email: email };
    if(email){

      fetch(`https://agile-scrubland-82961.herokuapp.com/user/${email}`,{

      method:'PUT',
      headers:{
        'content-type' : 'application/json'
      },
      body:JSON.stringify(currenUser)

      })
      .then(Response => Response.json())
      .then(data => {
        console.log('insert the useToken', data)
        const accessToken = data.token;
        localStorage.setItem('accessToken', accessToken);
        setToken(accessToken);
      })


    }



  },[user])
  return [token];
}


export default useToken;