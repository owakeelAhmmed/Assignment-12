import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
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

            <li><Link to='/dashboard'>My Order</Link></li>
            <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
            <li><Link to='/dashboard/alluser'>All User</Link></li>
          </ul>
        
        </div>
      </div>
    </section>
  );
};

export default Dashboard;