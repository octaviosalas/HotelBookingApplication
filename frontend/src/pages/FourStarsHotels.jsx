import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'
import StructureForHotels from '../components/StructureForHotels'
import NavBar from '../components/Navbar'
import Spinner from 'react-bootstrap/Spinner'; //bootstrap spinner load
import "../styles/structurehotels.css"

const FourStarsHotels = () => {

    const [fourStars, setFourStars] = useState([])
    const [spin, setSpin] = useState(true)

   const getHotels = () => { 
    axios.get("http://localhost:4000/getHotels")
         .then((res) => { 
            const docs = res.data
            console.log(docs)
            const onlyFourStars = docs.filter(hotels => hotels.stars === 4)
            console.log(onlyFourStars)
            setTimeout(() => { 
                setFourStars(onlyFourStars)
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
           <div>
      
          
             <div className='title-container'>
                <p className='title'>Four stars Hotels! </p>
            </div>

      {spin ? <div className='load'> <Spinner animation="border" role="status"> <span className="visually-hidden">Loading...</span> </Spinner></div> 
            :
            fourStars.map((cheap) => <StructureForHotels hotels={cheap}/>)}
          
 
  
   
</div>
    </div>
  )
}

export default FourStarsHotels
