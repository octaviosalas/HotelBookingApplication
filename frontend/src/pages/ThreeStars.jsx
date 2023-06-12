import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'
import StructureForHotels from '../components/StructureForHotels'
import NavBar from '../components/Navbar'
import Spinner from 'react-bootstrap/Spinner'; //bootstrap spinner load
import "../styles/structurehotels.css"

const ThreeStars = () => {

    const [threeStars, setThreeStars] = useState([])
    const [spin, setSpin] = useState(true)

   const getHotels = () => { 
    axios.get("http://localhost:4000/getHotels")
         .then((res) => { 
            const docs = res.data
            console.log(docs)
            const onlyThreeStars = docs.filter(hotels => hotels.stars === 3)
            console.log(onlyThreeStars)
            setTimeout(() => { 
                setThreeStars(onlyThreeStars)
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
      
            <NavBar />
            <div className='title-container'>
                <p className='title'>Three stars Hotels! </p>
            </div>

      {spin ? <div className='load'> <Spinner animation="border" role="status"> <span className="visually-hidden">Loading...</span> </Spinner></div> 
            :
            threeStars.map((cheap) => <StructureForHotels hotels={cheap}/>)}
          
 
  
   
</div>
    </div>
  )
}

export default ThreeStars
