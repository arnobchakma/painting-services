import React from 'react';
import './Navbar.css';
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
   return (
      <section>
         <div className="text">
            <Navbar className="navbar-color" expand="lg">
               <Navbar.Brand as={Link} to="/home">
                  <h4 className="text">PAINTING SERVICES</h4>
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto px-5 nav">
                     <Nav.Link as={Link} to="/home">
                        <span className="text-white"> Home</span>
                     </Nav.Link>
                     <Nav.Link as={Link} to="/common">
                        <span className="text-white"> Dashboard</span>
                     </Nav.Link>
                     <Nav.Link as={Link} to="/addReview">
                        <span className="text-white"> Review</span>
                     </Nav.Link>
                     <Nav.Link as={Link} to="/login">
                        <span className="text-white"> Login</span>
                     </Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Navbar>
         </div>
      </section>
   );
};

export default NavBar;
