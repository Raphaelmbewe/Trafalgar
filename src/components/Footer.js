import React from "react";
import './components.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Element from '../images/element.png'
import {AppFooterItem1} from './Trafalgar'
import{AppFooterItem2} from './Company'
import {AppFooterItem3 } from './Region'
import{AppFooterItem4} from './Help'


export const AppFooter = () => {
  return (
    <>
      <footer className=" page-footer App-footer py-md-5 ">
      {/* <img src={Element} alt="" className="footer-image img-fluid"/> */}
      <div className="Main-components-in-footer">
          <div className=" row container-fluid">
          <div className="col-md-3"><AppFooterItem2/></div>
          <div className="col-md-3"><AppFooterItem3/></div>
          <div className="col-md-3"><AppFooterItem4 /></div>
          <div className="col-md-3"><AppFooterItem1/></div>
      </div>
      </div>
      
      </footer>
    </>
  );
};