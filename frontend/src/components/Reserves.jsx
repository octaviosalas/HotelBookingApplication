import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import '../styles/reserves.css';


const Reserves = () => {

    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
      setDate(date);
    };

  return (
    <div className='container-reserve' style={{margin: "10vh"}}> 
         <Calendar onChange={onChange} value={date} />
    </div>
  )
}

export default Reserves
