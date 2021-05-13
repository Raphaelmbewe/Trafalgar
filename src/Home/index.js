import React from 'react';
import { Navigation } from '../components/Navigations';
import { AppJumbotron } from '../components/Jumbotron';
import { ElementImage } from '../components/DotImage';
import { MainLatestCard } from '../components/MainArticleCard';
import { InformationDisplay } from '../components/InformationDisplay';
import { LatestHeaderForArticles } from '../components/Articles/LatestHeader';
import { VidoesDisplay } from '../components/VideoDisplay';
import { AppFooter } from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Home = () => {
    AOS.init({
      duration: 1000,
    });
    return (
      <div className='App'>
        <Navigation />
        <AppJumbotron />
        <InformationDisplay/>
        <ElementImage />
        <LatestHeaderForArticles />
        <div data-aos='fade-up'>
          {' '}
          <MainLatestCard />
        </div>
        <VidoesDisplay/>
        <div data-aos='zoom-in'>
          {' '}
          <AppFooter />
        </div>
      </div>
    );
}