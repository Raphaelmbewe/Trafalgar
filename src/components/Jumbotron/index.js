import React from 'react';
import './jumbotron.css';
import { Jumbotron } from 'react-bootstrap';
import { AppCarousel } from '../Carousel';

export const AppJumbotron = () => {

    return (
      <>
        <Jumbotron fluid className='jumbotro-background'>
          <AppCarousel/>
        </Jumbotron>
      </>
    );
};