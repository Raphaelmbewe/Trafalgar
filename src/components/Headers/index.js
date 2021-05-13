import React from 'react';
import { MainHeader } from './FirstHeader';
import { MainHeader2 } from './SecondHeader';
import { MainHeader3 } from './ThirdHeader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './header.css';

export const AppHeader = () => {
  AOS.init({
    duration: 1000,
  });
  return (
    <div className='App'>
      <div data-aos='fade-up' className='bottomSpace'>
        {' '}
        <MainHeader />
      </div>
      <div data-aos='fade-up'>
        {' '}
        <MainHeader2 />
      </div>
      <div data-aos='fade-up' className='bottomSpace'>
        {' '}
        <MainHeader3 />
      </div>
    </div>
  );
}

