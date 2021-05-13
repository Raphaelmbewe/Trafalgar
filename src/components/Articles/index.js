import React from "react";
import {cardLatest} from './LatestData';
import './articles.css';
import "bootstrap/dist/css/bootstrap.min.css";

export const LatestCard = () => {
  return (
    <>
      {cardLatest.map((card) => {
        const { id, img, info, title} = card;
        return (
          <article key={id} className=" container">
              <div className="">
                  <div className="card shadow Latest-card-border-radius">
                  <img src={img} alt= {title} className="card-img-top" />
                  <div className="card-body">
                      <div className="card-title"><h5>{title}</h5></div>
                      <div className="card-text"><p className="text-secondary">{info}</p></div>
                      <button className="read-more-button" >Read more → </button>
                  </div>
              </div>
            <div>  
            </div>
              </div>
          </article>
        );
      })}
    </>
  );
};