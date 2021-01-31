import React from 'react';
import './components.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel} from 'react-bootstrap';
import{FeedBack} from './Feedback1'
import{FeedBack2} from './Feedback2'
import{FeedBack3} from './Feedback3'
import{FeedBack4} from './Feedback4'
export const AppCarousel = () =>{
    return(
        <>
        <Carousel nextIcon="" nextLabel="" prevIcon="" prevLabel="" className="" >
  <Carousel.Item>
    <div className="container-fluid">
        <FeedBack />
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <div className="container-fluid">
        <FeedBack2 />
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <div className="container-fluid">
        <FeedBack3 />
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <div className="container-fluid">
        <FeedBack4 />
    </div>
  </Carousel.Item>
</Carousel>
        </>
    )
}