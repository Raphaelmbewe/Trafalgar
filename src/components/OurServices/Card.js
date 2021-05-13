import React from "react";
import {cardInfo} from '../../Data/DataForCard';
import './services.css';
import "bootstrap/dist/css/bootstrap.min.css";

export const Card = () => {
  return (
    <>
      {cardInfo.map((card) => {
        const { id, img, info, title} = card;
        return (
          <article key={id} className="myCard shadow">
            <img src={img} alt= {title} />
            <div>
              <h4>{title}</h4>
              <p className="text-secondary">{info}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};