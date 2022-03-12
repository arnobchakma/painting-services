import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../../image/logo/Coffee-logo-design-on-transparent-background-PNG.png';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
   return (
      <section className=' navbar-background shadow-lg'>
         <div className="container justify-content-between align-items-center d-flex">
            <div>
               <Navbar className="brand">
                  <Link className='logo-color' to="/">
                     <img style={{width: '70px'}} src={logo} alt="" />
                  </Link>
               </Navbar>
            </div>
            <div>
               <Navbar expand="lg" variant={'dark'}>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="justify-content-end text-white gap-3">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/services">Services</Link>
                        <Link className="nav-link" to="/common">Dashboard</Link>
                        <Link className="nav-link" to="/addReview">Review</Link>
                        <Link className="nav-link" to="/login">Login</Link>
                     </Nav>
                  </Navbar.Collapse>
               </Navbar>
            </div>

         </div>
      </section>
   );
};

export default NavBar;
