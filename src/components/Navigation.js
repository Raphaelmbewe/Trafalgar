import React from 'react';
import './components.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../images/logo.png'
import { Link, Switch,Route, } from 'react-router-dom';
import { MainHeader } from './FirstHeader';
import {CardList} from './MainCards';
import { MainHeader3 } from './ThirdHeader';
import {AppCarousel} from './Carousel';
export const Navigation = ()=>{


    return (
<div >
    <Navbar  expand="lg" className="fixed-top nav-background ">
  <Navbar.Brand href="#home"><img src={Logo} alt=""  className=" align-top img-fluid"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto my-nav-items  text-secondary ">
           <Link to= "/" className="text-dark">Home</Link>      
           <Link to="find a doctor" className="text-secondary">Find a doctor</Link>
           <Link to="apps" className="text-secondary">Apps</Link>
          <Link to="testimonials" className="text-secondary">Testimonials</Link>
          <Link to="about" className="text-secondary">About us</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Switch>
  <Route path="/find a doctor"> <CardList/></Route>
  <Route path="/apps"> <MainHeader3/></Route>
  <Route path="/testimonials"> <AppCarousel/></Route>
  <Route exact path="/"> <MainHeader/></Route> 
  
</Switch>
</div>
    )
}