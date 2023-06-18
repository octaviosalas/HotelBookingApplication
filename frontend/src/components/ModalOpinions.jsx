import React from 'react'
import { Modal, Button, ModalBody } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Buttonn from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import axios from "axios"
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../store/usercontext.js'


const ModalOpinions = ({title, onClose, hotelId}) => {

   const userCtx = useContext(UserContext)
   const [userName, setUserName] = useState("")
   const [puntuaction, setPuntuaction] = useState("")
   const [opinion, setOpinion] = useState("")
 
   const sendMyOpinion = () => { 
    const newOpinion = { 
       userName: userName, 
       puntuaction: puntuaction,
       opinion: opinion,
       userId: userCtx.userId,
       hotelId: hotelId
    }
    axios.post("http://localhost:4000/saveMyOpinion", newOpinion)
          .then((res) => { 
            console.log(res.data)
            window.location.reload()
          })
          .catch((err) => { 
            console.log(err)
          })
   }

 

  return (
    <div>
          <Modal show={true} onHide={onClose}>
             <Modal.Header closeButton>
               <Modal.Title style={{fontSize:"1.5vh"}}>You are about to leave an opinion about the hotel <b> {title}</b> </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form>
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                   <Form.Label>Enter you Name</Form.Label>
                     <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setUserName(e.target.value)}/>
                 </Form.Group>
              </Form>
           </Modal.Body>

            <Modal.Body>
              <Form.Select aria-label="Default select example" onChange={(e) => setPuntuaction(e.target.value)}>
                 <option>Enter your Puntuaction</option>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6">6</option>
                 <option value="7">7</option>
                 <option value="8">8</option>
                 <option value="9">9</option>
                 <option value="10">10</option>
             </Form.Select>    
      </Modal.Body>

        <Modal.Body>
             <FloatingLabel controlId="floatingTextarea2" label="Comments">
               <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }}  onChange={(e) => setOpinion(e.target.value)}/>
            </FloatingLabel>
        </Modal.Body>

        <ModalBody>
              <Stack direction="row" spacing={2}>
                 <Buttonn variant="contained" endIcon={<SendIcon />} style={{marginLeft:"15vh"}} onClick={() => sendMyOpinion()}>Send my Opinion</Buttonn>
              </Stack>
        </ModalBody>
    </Modal>

    </div>
  )
}

export default ModalOpinions
