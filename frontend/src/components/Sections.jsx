import React from 'react'
//import "../styles/sections.css"
import home from "../img/home.png"
import sale from "../img/salee.png"
import hotels from "../img/hh.png"
import apartments from "../img/apartments.png"

const Sections = () => {
  return (

    

    <div className='container-sections'>
      <div className='sections-container'>
          <div className='btns-container'>
             <button className='btn-sections'><img src={home} className='icons-img'/>Home</button>
             <button  className='btn-sections'><img src={hotels} className='icons-img'/>Hotels</button>
             <button  className='btn-sections'><img src={apartments}  className='icons-img'/>Apartaments</button>
             <button  className='btn-sections'><img src={sale}  className='icons-img'/>Oferts</button>
         </div>
       </div>


       <div className='text-container'>
           <p className='text-happy'>Your happy is our Priority</p>
           <p>We show you and offer the best destinations at the best prices</p>
       </div>
    </div>

   
   
  )
}

export default Sections
