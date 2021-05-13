import React from "react";
import './footer.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {AppFooterItem1} from './CopyRight'
import{AppFooterItem2} from './UsefulLinks'
import {AppFooterItem3 } from './Region'
import{AppFooterItem4} from './Help'


export const AppFooter = () => {
  return (
    <>
      <footer className=" page-footer App-footer py-md-5 ">
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