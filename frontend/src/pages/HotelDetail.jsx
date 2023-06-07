import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import Carousel from 'react-bootstrap/Carousel';
import "../styles/detail.css"
import Spinner from 'react-bootstrap/Spinner'; //bootstrap spinner load
import NavBar from '../components/Navbar';
import Accordion from 'react-bootstrap/Accordion';

const HotelDetail = () => {

    const {id} = useParams()
    const [hotel, setHotel] = useState([])
    const [loading, setLoading] = useState(true)


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
     <div className=''> 

         {loading ? 
           <div className='loading-div'>
                     <Spinner animation="border" role="status"> <span className="visually-hidden">Loading...</span> </Spinner> 
           </div> 
             : 
             <>
           <NavBar />

         <div className='detail-container'>
            <h4><b>{hotel.name}</b></h4>

              <div className='container-img-slider-left'>
                 <Carousel className='img-detail-container'>
                    <Carousel.Item > <img className="d-block w-100" src={hotel.img[0]}  alt="First slide" /> </Carousel.Item>
                    <Carousel.Item> <img className="d-block w-100" src={hotel.img[1]} alt="Second slide"/></Carousel.Item>
                    <Carousel.Item> <img className="d-block w-100" src={hotel.img[2]} alt="Third slide"/> </Carousel.Item>
                 </Carousel> 
              </div>
           
          <Accordion defaultActiveKey="0">

                  <Accordion.Item eventKey="0">
                      <Accordion.Header>Location Data</Accordion.Header>
                          <Accordion.Body>
                               <p><b>Country:</b> {hotel.country}</p> 
                                <br/>
                                <p><b>City:</b> {hotel.city}</p> 
                                <br/>
                                <p><b>Adress:</b> {hotel.adress}</p> 
                          </Accordion.Body>
                 </Accordion.Item>

                <Accordion.Item eventKey="1">
                   <Accordion.Header>Servicies</Accordion.Header>
                      <Accordion.Body>
                      {hotel.servicies[0]}<br />
                      {hotel.servicies[1]}<br />
                      {hotel.servicies[2]}<br />
                      {hotel.servicies[3]}<br />
                      {hotel.servicies[4]}<br />
                      {hotel.servicies[5]}<br />
                     </Accordion.Body>
               </Accordion.Item>

               <Accordion.Item eventKey="2">
                   <Accordion.Header>Contact</Accordion.Header>
                      <Accordion.Body>
                        <p><b>Telephone: </b> {hotel.telephone}</p> 
                     </Accordion.Body>
               </Accordion.Item>
         </Accordion>
         <br />
         <button className='btn-reserv'>Reserv</button>
        </div>
          </>
         }
         
    </div>  
  )
}

export default HotelDetail
