import React from 'react';
import { videos } from './data';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import './video.css';

export const Video = () => {
  return (
    <>
      { videos.map((card) => {
        const { id, link } = card;
        return (
          <Container fluid key={id} className='myCardInformationDisplay shadow container'>
            <Row>
              <Col>
                <iframe
                  width='560'
                  height='315'
                  src={link}
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                ></iframe>
              </Col>
            </Row>
          </Container>
        );
      })}
    </>
  );
};
