import React from 'react';
import { Navigation } from '../components/Navigations';
import { AppFooter } from '../components/Footer';
import { AppHeader } from '../components/Headers';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AboutUs = () => {
  AOS.init({
    duration: 1000,
  });
  return (
    <div className='App'>
      <Navigation />
      <div>
          <AppHeader/>
      </div>
      <div data-aos='zoom-in'>
        {' '}
        <AppFooter />
      </div>
    </div>
  );
};
