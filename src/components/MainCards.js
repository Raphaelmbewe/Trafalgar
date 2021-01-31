import React from "react";
import {Card} from './Card';
import './components.css';
import "bootstrap/dist/css/bootstrap.min.css";

export const CardList = () =>{
  return  (
    <section className ="container">
      <div className="cardList container"><Card /></div>
     <div className="container ">
       <button className="button-for-learn-more" > Learn more</button>
     </div>
    </section>
  );
}