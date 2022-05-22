import React from "react";






function Navbar() {

  const menuItems = <>
            <li><Link to='/home'>Home</Link></li>
            <li><link to='/dashbord'>Dashboard</link></li>
            <li><link to='/'>About</link></li>
            <li><link to='/blogs'>Blogs</link></li>
            <li><link to='/login'>Login</link></li>
         </>

    return (
        <div className="navbar bg-primary">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li tabindex="0">
                {menuItems}
              </li>
              
            </ul>
          </div>
          <button class="btn bg-neutral text-white gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            Super Gear
          </button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li tabindex="0">
                {menuItems}
            </li>
            
          </ul>
        </div>
        
      </div>
    );
}

export default Navbar;