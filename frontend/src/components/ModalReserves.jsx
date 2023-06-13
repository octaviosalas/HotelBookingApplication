import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import "../styles/detaill.css"

const CustomModal = ({ title, body, bodyTwo, bodyThree, bodyFour, onClose }) => {
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
             {body}
             <br />
             {bodyTwo}
             <br />
             {bodyThree}
             <br />
            <b>{bodyFour}</b> 
      </Modal.Body>
      <Modal.Body>
            <Button className='definitive-confirm' style={{color:"black", background:"lightblue", boder:"lightblue"}}>Confirm and send me the Email</Button>
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;