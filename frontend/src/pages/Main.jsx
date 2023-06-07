import React from 'react'
import NavBar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import ContinentsItems from '../components/ContinentsItems'

const Main = () => {


  return (
    <div>
           <NavBar/>
           <ContinentsItems />

   
    </div>
  )
}

export default Main


