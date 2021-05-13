import React from "react";
import './header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Hero3 from '../../images/hero3.png';

export const MainHeader3 = () =>{
    return(
        <article className="container Main-Text-Tag thirdHeader">
            <div className="row">
                <div className="col-md-4">
                    <div className="text-left ml-3">
                    <h1>Download our <br/> mobile apps</h1>
                    <div className="line2 mt-4"></div>
                    </div>
                    <p className="text-secondary text-left container">
                        Our dedicated patient engagement app and web portal allow you to access
                         information instantaneously (no tedeous form, long calls, 
                          or administrative hassle) and securely
                    </p>
                      <button className="button-for-learn-more2 ">Download ↓  </button>
                </div>
                <div className="col-md-8 pl-md-5 Hero">
                    <img src={Hero3} alt="" className="img-fluid"/>
                </div>
            </div>
        </article>
    )
}