import React from "react";
import './components.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {person4} from '../Data/FeedbackData'

export const FeedBack4 = () =>{
    return(

        <>
        {
        person4.map((person)=>{
            const { id,img,name,info,occupation} = person;
            return(
            <div className="container-fluid" key={id}>
            <div className=" card border-0 py-md-5" 
            style={{background: 'linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%)',}}>
           <h3>What our customers are saying</h3>
            <div className="line-for-feedback bg-light"></div>
            <div className=" container-fluid feedback-info">
        <div className="row g-0">
        <img src={img} alt={name}  className=" rounded-img  mb-4 mx-4"/>
       <div className="col-md-8">
        <div className="card-body">
        <h5 className="card-title text-light">{name}</h5>
        <p className="card-text text-light ">
            {info}
        </p>
        <p className="card-text"><small className="text-muted">{occupation}</small></p>
      </div>
    </div>
  </div>
</div>
</div>
</div>
 )
 })
 }
 </>
    )
}