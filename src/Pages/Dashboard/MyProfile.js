import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);
      console.log(user);





  return (
    <section>
     <div className='flex justify-center mt-12'>
    <div>
    <div class="avatar ">
      <div class="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src= {user.photoURL} />
      </div>
    </div>
      <h1 className='text-primary font-bold text-2xl'>{user.displayName}</h1>
    </div>
     </div>
    </section>
  );
};

export default MyProfile;