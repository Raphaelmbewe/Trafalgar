import React from "react";
import './components.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Element from '../images/element.png'

export const ElementImage = () =>{
    return(
        <div className="image">
            <img src={Element} alt="" className="img-fluid"/>
        </div>
    )
}