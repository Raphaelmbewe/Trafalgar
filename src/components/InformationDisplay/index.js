import React from 'react';
import { Card } from './infoCard';
import './informationDisplay.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const InformationDisplay = () => {
  return (
    <>
      <div className='lineInformationDisplay'></div>
      <section className='container'>
        <div className='cardListInformationDisplay container'>
          <Card />
        </div>
      </section>
    </>
  );
};
