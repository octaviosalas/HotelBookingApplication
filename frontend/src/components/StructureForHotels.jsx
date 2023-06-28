import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import "../styles/structurehotels.css"
import { Link } from 'react-router-dom';
import favIcon from "../img/favourite.png"
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../store/usercontext.js'
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Opinions from './Opinions';
import FavsBar from './SnackFavourites';


//  { message ? <img src={favIcon} className='img-fav-icon' title='Save in Favourites' onClick={() => saveHotelLikeFavourite()}></img> :<Alert variant="success"><p>The Hotel was saved correctly in your favorites ✔</p></Alert>}


const StructureForHotels = ({hotels}) => {

   const userCtx = useContext(UserContext)
   const [message, setMessage] = useState(true)
  

    const getStarRating = (stars) => {
        const starSymbol = '⭐';
        const starRating = Array.from({ length: stars }, () => starSymbol).join('');
        return starRating;
      };

      const saveHotelLikeFavourite = () => { 
         const hotelSelected = { 
            id: hotels.id,
            userId: userCtx.userId,
            name: hotels.name,
            averagePrice: hotels.averagePrice,
            stars: hotels.stars,
            servicies: [hotels.servicies[0], hotels.servicies[1], hotels.servicies[2], hotels.servicies[3], hotels.servicies[4], hotels.servicies[5], hotels.servicies[6]],
            img: [hotels.img[0], hotels.img[1], hotels.img[2]],
            country: hotels.country,
            adress: hotels.adress,
            city: hotels.city,
            telephone: hotels.telephone,
            email: hotels.email,

         }
         axios.post("http://localhost:4000/favouritesHotels", hotelSelected)
              .then(({data}) => {
               setMessage(false)
               console.log(data)
               setTimeout(() => { 
                    setMessage(true)
               }, 1900)
               })
              .catch((err) => {console.log(err)})
      }


  return (

    <>     


          

       <div className='structure-items'> 
       
         <Card className='card-allworld'>
            <div className='cont-card'>
                 <Carousel className='img-item' variant="left">
                    <Carousel.Item > <img className="d-block w-100 imgimg"  src={hotels.img[0]}  alt="First slide" /> </Carousel.Item>
                    <Carousel.Item> <img className="d-block w-100 imgimg" src={hotels.img[1]} alt="Second slide"/></Carousel.Item>
                    <Carousel.Item> <img className="d-block w-100 imgimg" src={hotels.img[2]} alt="Third slide"/> </Carousel.Item>
                 </Carousel> 
                          <Card.Body variant="right" className='body-card'>
                              <div style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
                                    <Card.Title className='title-cart' style={{marginLeft:"10vh"}}>{hotels.name}</Card.Title>
                                       <FavsBar saveFavInDb={saveHotelLikeFavourite}/> 
                               </div>
                                  <Card.Text>
                                    <b className='stars'>{getStarRating(hotels.stars)} </b>
                                    <p>Prices may vary depending on the room chosen</p> 
                                    <br/>
                                    <p>One Nigth: 💸 {hotels.averagePrice} USD</p>
                                    <p>Three Nigths: 💸 {hotels.averagePrice * 3} USD</p>
                                    <p>Six Nigths: 💸 {hotels.averagePrice * 6} USD</p>
                                    <br />
                                   <Link to={`/hotelDetail/${hotels.id}`}><button className='btn-reserv'>View More</button></Link> 
                        
                         
                                </Card.Text>
                                
                         </Card.Body>
            </div>
                    
    
                    <Accordion defaultActiveKey="0" className='acor-dion'>
                         <Accordion.Item eventKey="1"  style={{marginTop:"1vh"}}>
                                 <Accordion.Header className='btn-sectionn'> <b className='btn-b'>Servicies</b></Accordion.Header>
                                     <Accordion.Body style={{marginTop:"1.5vh"}}>  
                                             <p>{hotels.servicies[0]}</p>
                                             <p>{hotels.servicies[1]}</p>
                                             <p>{hotels.servicies[2]}</p>
                                             <p>{hotels.servicies[3]}</p>
                                             <p>{hotels.servicies[4]}</p>
                                             <p>{hotels.servicies[5]}</p>
                                             <p>{hotels.servicies[6]}</p>               
                                     </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" style={{marginTop:"1vh"}}>
                                   <Accordion.Header className='btn-sectionn'> <b className='btn-b'>Location</b> </Accordion.Header>
                                        <Accordion.Body  style={{marginTop:"1.5vh"}}>  
                                                <p> 📍 {hotels.country}</p> 
                                                <p> 📍 {hotels.city}</p> 
                                                <p> 🏠 {hotels.adress}</p> 
                                       </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3" style={{marginTop:"1vh"}}>
                                      <Accordion.Header className='btn-sectionn' > <b className='btn-b'>Contact</b></Accordion.Header>
                                      <Accordion.Body style={{marginTop:"1.5vh"}} >  
                                                <p> 📞 Tel: {hotels.telephone}</p>       
                                                <p> ✉ Email: {hotels.email} </p>                                     
                                       </Accordion.Body>
                                      <Accordion.Body >
                                           
                                     </Accordion.Body>
                        </Accordion.Item>
                     </Accordion> 
             
                  
        </Card>
    </div>

   
   </>
    

  )
}

export default StructureForHotels

