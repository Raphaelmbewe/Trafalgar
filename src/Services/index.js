import React from 'react';
import { Navigation } from '../components/Navigations';
import { AppFooter } from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CardList } from '../components/OurServices';

export const Services = () => {
  AOS.init({
    duration: 1000,
  });
  return (
    <div className='App'>
      <Navigation />
      <div data-aos='fade-up'>
        {' '}
        <CardList/>
      </div>
      <div data-aos='zoom-in'>
        {' '}
        <AppFooter />
      </div>
    </div>
  );
};
