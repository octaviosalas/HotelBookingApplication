import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from 'react';
import '../styles/reserves.css';
import Navbar from "./Navbar"
import axios from 'axios';
import "../styles/detaill.css"
import { useParams } from 'react-router-dom';
import HotelDetail from '../pages/HotelDetail';


const Reserves = () => {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hotel, setHotel] = useState([])
  const {id} = useParams()



  useEffect(() => { 
    axios.get(`http://localhost:4000/getHotelsById/${id}`)
    .then((res) => { 
            const docs = res.data
             console.log(docs)
             setTimeout(() => { 
               docs.map((hotelSelected) => { 
                   setHotel(hotelSelected)
                })

             }, 2000)
           
    })
    .catch((err) => { 
       console.log(err)
    })
  }, [id])



  const handleDateClick = (date) => {
    if (!startDate) {
      setStartDate(date);
    } else if (!endDate) {
      setEndDate(date);
    } else {
      setStartDate(date);
      setEndDate(null);
    }
  };

  console.log(startDate)
  console.log(endDate)

  const formattedStartDate = startDate ? startDate.toLocaleDateString() : '';
  const formattedEndDate = endDate ? endDate.toLocaleDateString() : '';

  


  return (

    <>

    <div className='reserves-container'> 

      <HotelDetail hotelId={id}/>

       <div className='container-reserve' style={{ margin: '10vh' }}>
              <p>Please, choose your arrival date and your departure date from the hotel</p>
                   <Calendar onClickDay={handleDateClick} tileClassName={({ date, view }) =>
                       startDate && date.toDateString() === startDate.toDateString()
                          ? 'selected-start-date'
                          : endDate && date.toDateString() === endDate.toDateString()
                          ? 'selected-end-date'
                          : '' }/>
         </div>

         <div>
             <p>Arrival Date: {formattedStartDate}</p>
             <p>Departure Date: {formattedEndDate}</p>
             <button style={{color: 'lightblue', background: "black"}}>Confirm</button>
         </div>

    </div>
 
       
    </>



  )
}

export default Reserves
