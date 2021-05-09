import React from 'react';
import './Navbar.css';
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
   return (
      <section className="bg-dark">
            <div className="container">
               <Navbar>
                  <Navbar.Brand as={Link} to="/home">
                     <h4 className="text">P SERVICES</h4>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">
                           <span className="text-white"> Home</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/common">
                           <span className="text-white mx-4"> Dashboard</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/addReview">
                           <span className="text-white"> Review</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/login">
                           <span className="text-white mx-4"> Login</span>
                        </Nav.Link>
                     </Nav>
                  </Navbar.Collapse>
               </Navbar>
            </div>
      </section>
   );
};

export default NavBar;
