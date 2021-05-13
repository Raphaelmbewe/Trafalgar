import React from 'react';
import { information } from './data';
import 'bootstrap/dist/css/bootstrap.min.css';
import './informationDisplay.css';

export const Card = () => {
  return (
    <>
      {information.map((card) => {
        const { id, info, title, link } = card;
        return (
          <article key={id} className='myCardInformationDisplay shadow'>
            <div>
              <h4>{title}</h4>
              <ul><a href={link}>{info}</a></ul>
              <p className='text-secondary'></p>
            </div>
          </article>
        );
      })}
    </>
  );
};
