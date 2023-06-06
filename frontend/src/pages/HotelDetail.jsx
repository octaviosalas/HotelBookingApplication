import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import Carousel from 'react-bootstrap/Carousel';
import "../styles/detail.css"
import Spinner from 'react-bootstrap/Spinner'; //bootstrap spinner load
import NavBar from '../components/Navbar';

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
           <div>
             <p>Loading</p>
             <Spinner animation="border" role="status"> <span className="visually-hidden">Loading...</span> </Spinner> 
           </div> 
             : 
            <>
       
               <NavBar />
           
        <div className='div-detail'>
           <div className=''>
              <p><b>{hotel.name}</b></p>
              <p>Approximate price per night {hotel.averagePrice}</p>
          </div>

         <div>
            <Carousel className='img-detail-container'>
              <Carousel.Item> <img className="d-block w-100" src={hotel.img[0]}  alt="First slide" /> </Carousel.Item>
              <Carousel.Item> <img className="d-block w-100" src={hotel.img[1]} alt="Second slide"/></Carousel.Item>
              <Carousel.Item> <img className="d-block w-100" src={hotel.img[2]} alt="Third slide"/> </Carousel.Item>
           </Carousel> 
        </div>

        </div>
        
          
          </>
         }
    </div>  
  )
}

export default HotelDetail
