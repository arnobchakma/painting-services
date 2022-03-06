import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../../image/logo/Coffee-logo-design-on-transparent-background-PNG.png';

const NavBar = () => {
   return (
      <section className="navbar-background">
         <div className="container">

            {/* Navbar wrapper */}
            <div className="d-flex align-items-center justify-content-between">
               <div>
                  <Link to="/">
                     <div className='p-1'>
                        <img className="image-width" src={logo} alt="" />
                     </div>
                  </Link>
               </div>
               <div className="d-flex">
                  <Link className='text-white text-decoration-none' to="/home"> Home </Link>
                  <Link className='px-5 text-white text-decoration-none' to="/common"> Dashboard </Link>
                  <Link className='text-white text-decoration-none' to="/review"> Review </Link>
                  <Link className='px-5 text-white text-decoration-none' to="/login"> Login </Link>
               </div>
            </div>

         </div>
      </section>
   );
};

export default NavBar;
