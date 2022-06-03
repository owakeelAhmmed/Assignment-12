import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/userAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user);
   
  return (
    <section>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet/>
        
        </div> 
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-60 text-base-content backdrop-brightness-200">

            <li className='text-primary'><Link to='/dashboard'>My Order</Link></li>
            <li className='text-primary'><Link to='/dashboard/addproduct'>Add Product</Link></li>
            <li className='text-primary'><Link to='/dashboard/myprofile'>My Profile</Link></li>
            <li className='text-primary'><Link to='/dashboard/addreview'>Add Review</Link></li>
            {admin && <li className='text-primary'><Link to='/dashboard/alluser'>All User</Link></li>}
            {admin && <li className='text-primary'><Link to='/dashboard/manageproduct'>Manage Product</Link></li>}
          </ul>
        
        </div>
      </div>
    </section>
  );
};

export default Dashboard;