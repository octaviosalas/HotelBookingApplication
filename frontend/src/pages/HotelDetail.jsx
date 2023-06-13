

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import Carousel from 'react-bootstrap/Carousel';
import "../styles/detaill.css"
import Spinner from 'react-bootstrap/Spinner'; //bootstrap spinner load
import NavBar from '../components/Navbar';
import Accordion from 'react-bootstrap/Accordion';
import Reserves from '../components/Reserves';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CustomModal from '../components/ModalPhotos';
import { Link } from 'react-router-dom';






const HotelDetail = () => {

    const {id} = useParams()
    const [hotel, setHotel] = useState([])
    const [loading, setLoading] = useState(true)
    const [acordionServicie, setAcordionServicie] = useState(true)
    const [acordionLocation, setAcordionLocation] = useState(true)
    const [acordionContact, setAcordionContact] = useState(true)
    const [acordionBeedroms, setAcordionBeedroms] = useState(true)
    const [acordionPhotos, setAcordionPhotos] = useState(true)
    const [modal, setModal] = useState(true)
    const [showReserveComponent, setShowReserveComponent] = useState(true)
   
   



    useEffect(() => { 
        axios.get(`http://localhost:4000/getHotelsById/${id}`)
             .then((res) => { 
                     const docs = res.data
                      console.log(docs)
                      setTimeout(() => { 
                        docs.map((hotelSelected) => { 
                            setHotel(hotelSelected)
                         })
                         setLoading(false)
                      }, 2000)
                    
             })
             .catch((err) => { 
                console.log(err)
             })
    }, [])
    

  return (
     <div className='hotel-details-container'> 
     

         {loading ? 
           <div className='loading-div'>
                       <p>You are being redirected to the hotel details..</p>
                     <Spinner animation="border" role="status" className='spin'> <span className="visually-hidden">Loading...</span> </Spinner> 
           </div> 
             : 
             <>
           <NavBar />

   
           

         <div className='detail-container'>
            
      
            
            <h4><b>{hotel.name}</b></h4>

              <div className='container-img-slider-left'>
                 <Carousel className='img-detail-container'>
                    <Carousel.Item > <img className="d-block w-100 imgimg"  src={hotel.img[0]}  alt="First slide" /> </Carousel.Item>
                    <Carousel.Item> <img className="d-block w-100 imgimg" src={hotel.img[1]} alt="Second slide"/></Carousel.Item>
                    <Carousel.Item> <img className="d-block w-100 imgimg" src={hotel.img[2]} alt="Third slide"/> </Carousel.Item>
                 </Carousel> 
              </div>

         <div className='lala'>
              <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                     <Nav.Link  onClick={() => setAcordionServicie(false)}>Servicies</Nav.Link>
               </Nav.Item>
                <Nav.Item>
                     <Nav.Link onClick={() => setAcordionLocation(false)}>Location</Nav.Link>
               </Nav.Item>
                <Nav.Item>
                     <Nav.Link  onClick={() => setAcordionContact(false)}>Contact</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                     <Nav.Link  onClick={() => setAcordionBeedroms(false)}>Beedroms</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                     <Nav.Link  onClick={() => setAcordionPhotos(false)}>More Photos</Nav.Link>
               </Nav.Item>
             </Nav>
           
         </div>

         <div>
            {acordionServicie ? null 
                              :
                              <Accordion defaultActiveKey="0" className='acordion-servicies-hotel'>
                   <Accordion.Item eventKey="0">
                              <Accordion.Body> 
                                  {hotel.servicies[0]}<br />
                                  {hotel.servicies[1]}<br />
                                  {hotel.servicies[2]}<br />
                                  {hotel.servicies[3]}<br />
                                  {hotel.servicies[4]}<br />
                                  {hotel.servicies[5]}<br />
                                  <p className='close' onClick={() => setAcordionServicie(true)}>Close Servicies</p>
                              </Accordion.Body>
                   </Accordion.Item>
              </Accordion>
                              }

            {acordionLocation ? null 
                              :
                              <Accordion defaultActiveKey="0" className='acordion-location-hotel'>
                   <Accordion.Item eventKey="0">
                              <Accordion.Body> 
                              <p><b>Country:</b> {hotel.country}</p> 
                                <br/>
                                <p><b>City:</b> {hotel.city}</p> 
                                <br/>
                                <p><b>Adress:</b> {hotel.adress}</p> 
                                  <p className='close' onClick={() => setAcordionLocation(true)}>Close Location</p>
                              </Accordion.Body>
                   </Accordion.Item>
              </Accordion>}      

                     {acordionContact ? null 
                              :
                              <Accordion defaultActiveKey="0" className='acordion-contact-hotel'>
                   <Accordion.Item eventKey="0">
                              <Accordion.Body> 
                                  <p><b> 📞 Telephone : </b> {hotel.telephone} </p> 
                                  <p><b> ✉  Email  : </b> {hotel.email} </p> 
                                  <p className='close' onClick={() => setAcordionContact(true)}>Close Contact Data</p>
                              </Accordion.Body>
                   </Accordion.Item>
              </Accordion>}             


                     {acordionBeedroms ? null 
                              :
                              <Accordion defaultActiveKey="0" className='acordion-contact-hotel'>
                   <Accordion.Item eventKey="0">
                              <Accordion.Body>                             
                                  <p>The hotel has <b>{hotel.bedrooms} rooms</b>. Which, depending on their comforts and characteristics, influence their prices. The average price per night is {hotel.averagePrice}, which, as mentioned, will depend on the room chosen.</p>
                                  <p className='close' onClick={() => setAcordionBeedroms(true)}>Close Information</p> 
                                 
                              </Accordion.Body>
                   </Accordion.Item>
              </Accordion>}             

              {acordionPhotos ? null 
                              :
                              <Accordion defaultActiveKey="0" className='acordion-contact-hotel'>
                   <Accordion.Item eventKey="0">
                              <Accordion.Body>    
                                   <img src={hotel.img[3]} className='acordion-pics-hotel' onClick={() => setModal(false)}></img>
                                   <img src ={hotel.img[4]} className='acordion-pics-hotel' onClick={() => setModal(false)}></img>
                                   <img src={hotel.img[5]} className='acordion-pics-hotel' onClick={() => setModal(false)}></img>
                                   <img src={hotel.img[6]} className='acordion-pics-hotel' onClick={() => setModal(false)}></img>
                                   <p className='close' onClick={() => setAcordionPhotos(true)}>Close Photos</p> 
                              </Accordion.Body>
                   </Accordion.Item>
              </Accordion>}                             
         </div>

         <div>
           {modal ? null : <CustomModal onClose={() => setModal(true)} title={hotel.name} body={[hotel.img[0], hotel.img[1], hotel.img[2], hotel.img[3], hotel.img[4], hotel.img[5], hotel.img[6]]}/>}
         </div> 
           <div className='show-reserve'>
              <Link to={`/reserves/${hotel.id}`}> <button className='btn-reserv'>Reserv</button></Link>
           </div>
    
        </div>
          </>
         }
         
    </div>  
  )
}


export default HotelDetail 
/*
<div>
<Reserves />*/

