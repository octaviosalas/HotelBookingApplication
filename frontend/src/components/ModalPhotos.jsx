import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import "../styles/detaill.css"

const CustomModal = ({ title, body, onClose }) => {
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
         <Carousel>
            <Carousel.Item> <img className="d-block w-100 img-modal"src={body[0]} alt="First slide"/></Carousel.Item>
            <Carousel.Item><img className="d-block w-100  img-modal" src={body[1]} alt="Second slide"/></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100  img-modal" src={body[2]} alt="Third slide"/></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100  img-modal" src={body[3]} alt="Third slide"/></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100  img-modal" src={body[4]} alt="Third slide"/></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100  img-modal" src={body[5]} alt="Third slide"/></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100  img-modal" src={body[6]} alt="Third slide"/></Carousel.Item>
         </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;