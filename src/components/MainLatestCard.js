import React from "react";
import {LatestCard } from './Latest';
import './components.css';
import "bootstrap/dist/css/bootstrap.min.css";

export const MainLatestCard = () =>{
  return  (
    <section className ="container">
      <div className="List-latest-cards container"><LatestCard  /></div>
     <div className="container ">
         <button className="button-for-view-all">View all</button>
     </div>
    </section>
  );
}