import React from 'react'
import NavBar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import ContinentsItems from '../components/ContinentsItems'

import "../styles/main.css"

const Main = () => {


  return (
    <div> 
                  
           <ContinentsItems /> 
    </div>
  )
}

export default Main


