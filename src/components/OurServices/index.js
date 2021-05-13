import React from "react";
import {Card} from './Card';
import './services.css';
import { Intro } from './Information';
import "bootstrap/dist/css/bootstrap.min.css";

export const CardList = () =>{
  return (
    <>
      <div> <Intro/> </div>
      <section className='container'>
        <div className='cardList container'>
          <Card />
        </div>
        <div className='container '>
          <button className='button-for-learn-more'> Learn more</button>
        </div>
      </section>
    </>
  );
}