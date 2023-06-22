import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'
import StructureForHotels from '../components/StructureForHotels'
import NavBar from '../components/Navbar'
import Spinner from 'react-bootstrap/Spinner'; //bootstrap spinner load
import "../styles/structurehotels.css"

const FiveStars = () => {

    const [fiveStars, setFiveStars] = useState([])
    const [spin, setSpin] = useState(true)

   const getHotels = () => { 
    axios.get("http://localhost:4000/getHotels")
         .then((res) => { 
            const docs = res.data
            console.log(docs)
            const onlyFive = docs.filter(hotels => hotels.stars === 5)
            console.log(onlyFive)
            setTimeout(() => { 
                setFiveStars(onlyFive)
                setSpin(false)
            }, 1500)         
         })
         .catch((err) => { 
            console.log(err)
         })
   }

   useEffect(() => { 
        getHotels()
   }, [])

   

  return (
    <div>
        
      
            <div className='title-container'>
               <p className='title'>Five stars Hotels! </p>
            </div>

      {spin ? <div className='load'> <Spinner animation="border" role="status"> <span className="visually-hidden">Loading...</span> </Spinner></div> 
            :
          
            fiveStars.map((cheap) => <StructureForHotels hotels={cheap}/>)}
          
 
  

    </div>
  )
}

export default FiveStars
