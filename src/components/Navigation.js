import React from 'react';
import './components.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../images/logo.png'
import { Navbar, Nav } from 'react-bootstrap';
export const Navigation = ()=>{
    return (
 <Navbar  expand="lg" className="fixed-top nav-background ">
  <Navbar.Brand href="#home"><img src={Logo} alt=""  className=" align-top img-fluid"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto my-nav-items">
      <Nav.Link href="#home" className="active">Home</Nav.Link>
      <Nav.Link href="#find">Find a doctor</Nav.Link>
      <Nav.Link href="#apps">Apps</Nav.Link>
      <Nav.Link href="#testimonails">Testimonials</Nav.Link>
      <Nav.Link href="#aboutus">About us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}