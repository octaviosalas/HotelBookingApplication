import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from 'react';
import '../styles/reserves.css';
import axios from 'axios';
import "../styles/detaill.css"
import { useParams } from 'react-router-dom';
import HotelDetail from '../pages/HotelDetail';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import CustomModal from '../components/ModalReserves';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';





const Reserves = () => {


  const [loadingPage, setLoadingPage] = useState(true)
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hotel, setHotel] = useState([])
  const {id} = useParams()
  const [coordinate, setCoordinate] = useState(true)
  const [people, setPeople] = useState(null)
  const [pricePerNight, setPricePerNight] = useState(null)
  const [priceStay, setPriceStay] = useState(null)
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [showModal, setShowModal] = useState(true);

  console.log(people)



  useEffect(() => { 
    axios.get(`http://localhost:4000/getHotelsById/${id}`)
    .then((res) => { 
            const docs = res.data
             console.log(docs)
             setTimeout(() => { 
               docs.map((hotelSelected) => { 
                   setHotel(hotelSelected)
                   setPricePerNight(hotelSelected.averagePrice)
                })
             }, 2000)
           
    })
    .catch((err) => { 
       console.log(err)
    })
  }, [id])

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const days = Math.floor((end - start) / (1000 * 60 * 60 * 24)); // Calcula la diferencia en milisegundos y conviértela a días
      setNumberOfDays(days);
    }
  }, [startDate, endDate]);

  useEffect(() => { 
      setTimeout(() => { 
          setLoadingPage(false)
      }, 2000)    
  }, [])



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

   
  const openCoordinate = () => { 
    setCoordinate(false)
  }

  

  return (

   <>   

      
              
              <div className='reserves-container'> 
                 <HotelDetail hotelId={id}/>

               
                 
                 <div className='container-reserve'>
                    
                       <Accordion defaultActiveKey="1" >
                           <Accordion.Item eventKey="0" >
                              <Accordion.Header className='acord'><b className='btn-b'>Select Arrival Date and Departure Date</b></Accordion.Header>
                                  <Accordion.Body>
                                     <Calendar className="calendario" onClickDay={handleDateClick} tileClassName={({ date, view }) =>
                                     startDate && date.toDateString() === startDate.toDateString()
                                     ? 'selected-start-date'
                                     : endDate && date.toDateString() === endDate.toDateString()
                                     ? 'selected-end-date'
                                     : '' }/>
                                 </Accordion.Body>
  
                           </Accordion.Item>
                               <Accordion.Item eventKey="2" className='acord'>
                                   <Accordion.Header><b className='btn-b'>Amount of People</b></Accordion.Header>
                                     <Accordion.Body>
                                         <Form.Select aria-label="Default select example" onChange={(e) => setPeople(e.target.value)}>
                                             <option value="1" >Alone</option>
                                             <option value="2" >Two</option>
                                             <option value="3" >Three</option>
                                             <option value="3" >Four</option>
                                         </Form.Select>
                                     </Accordion.Body>
                              </Accordion.Item>
             
                        </Accordion>
                          
                               
  
                                           
                              <div className='data-div'>
                                     <p className='data-reserve'> <b>Arrival Date:</b> {formattedStartDate}</p>
                                     <p className='data-reserve'><b>Departure Date:</b> {formattedEndDate}</p>
                                     <p className='data-reserve'><b>Numer of Days:</b> {numberOfDays}</p>
                                     <p className='data-reserve'><b>Quantity Of People:</b> {people}</p>
                                     <p className='data-reserve'><b>Price of the stay:</b> {numberOfDays * pricePerNight} USD 💲  </p>
                                     <button className='confirm-reserve-btn' onClick={() => setShowModal(false)}>Continue to Confirm</button>
                                </div>

                                <div>
                                    {showModal ? null : <CustomModal onClose={() => setShowModal(true)} title={hotel.name} body={formattedStartDate } bodyTwo={formattedEndDate} bodyThree={people} bodyFour={ numberOfDays*pricePerNight}/>}
                                </div>
  
  
                                                     
        </div>
  
                 
                  
       
      </div>
   
              
             
   
       
    </>



  )
}

export default Reserves

/*



                <div className='container-reserve-two'>
                     <p className='title-reserve'>Please, choose your arrival date and your departure date from the hotel</p>
                     <p className='close-reserve' onClick={() => setCoordinate(true)}>X</p>

                     <div className='reserve-medium'>
                           
                              <Calendar onClickDay={handleDateClick} tileClassName={({ date, view }) =>
                                  startDate && date.toDateString() === startDate.toDateString()
                                  ? 'selected-start-date'
                                  : endDate && date.toDateString() === endDate.toDateString()
                                  ? 'selected-end-date'
                                  : '' }/>
                     </div>
                        

                              <div className='data-div'>
                                  <p>Arrival Date: {formattedStartDate}</p>
                                   <p>Departure Date: {formattedEndDate}</p>
                                   <button className='confirm-reserve-btn'>Confirm Reserve</button>
                              </div>
                </div> 

                

/* <>

    <div className='reserves-container'> 

           <HotelDetail hotelId={id}/>

       

       <div className='container-reserve'>
   
           {coordinate ?  <button className='confirm-reserve' onClick={() => openCoordinate()}>Coordinate Reservation</button> : 

               <div className='container-reserve-two'>
                     <p className='title-reserve'>Please, choose your arrival date and your departure date from the hotel</p>
                     <p className='close-reserve' onClick={() => setCoordinate(true)}>X</p>

                     <div className='reserve-medium'>
                           
                              <Calendar onClickDay={handleDateClick} tileClassName={({ date, view }) =>
                                  startDate && date.toDateString() === startDate.toDateString()
                                  ? 'selected-start-date'
                                  : endDate && date.toDateString() === endDate.toDateString()
                                  ? 'selected-end-date'
                                  : '' }/>
                     </div>
                        

                              <div className='data-div'>
                                  <p>Arrival Date: {formattedStartDate}</p>
                                   <p>Departure Date: {formattedEndDate}</p>
                                   <button className='confirm-reserve-btn'>Confirm Reserve</button>
                              </div>
              </div>
           }

              
             
        

           

        </div>

    </div>
 
       
    </>*/

