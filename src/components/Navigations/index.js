import React from 'react';
import './navigation.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
export const Navigation = ()=>{

    return (
      <div>
        <Navbar expand='lg' className='fixed-top nav-background '>
          <Navbar.Brand href='#home'>
            <div className='logoAndName'>
              <img src={Logo} alt='' className=' align-top img-fluid logo' />
              <div className='nameTag'>
                <div className='nameFP'> My Community </div>
                Health
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto my-nav-items  text-secondary '>
              <Link to='/' className='text-dark'>
                Home
              </Link>
              <Link to='testimonials' className='text-secondary'>
                Services
              </Link>
              <Link to='about' className='text-secondary'>
                About Us
              </Link>
              <Link to='apps' className='text-secondary'>
                Testimonials
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}