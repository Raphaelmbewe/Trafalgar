import React from "react";
import {Navigation} from './components/Navigation';
import {ElementImage } from './components/DotImage';
import { MainHeader } from './components/FirstHeader';
import {About } from './components/Information';
import {CardList} from './components/MainCards';
import {MainHeader2} from './components/SecondHeader';
import {MainHeader3} from './components/ThirdHeader';
import{MainLatestCard } from './components/MainLatestCard'
import {AppCarousel} from './components/Carousel'
import {LatestHeaderForArticles } from './components/LatestHeader'
import {AppFooter} from './components/Footer'
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  
    AOS.init({
      duration : 1000
    })
  return (
      <div className="App">
       <Navigation />
       <ElementImage />
       < MainHeader />
       <About />
       <div data-aos='fade-up'><CardList /></div>
        <MainHeader2 />
        <MainHeader3 />
        <AppCarousel />
       <LatestHeaderForArticles />
       <div data-aos='fade-up'> <MainLatestCard  /></div>
       <div data-aos='zoom-in'> <AppFooter/></div>
    </div>
  );

}

export default App;
