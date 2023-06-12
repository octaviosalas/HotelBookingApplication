import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'
import StructureForHotels from '../components/StructureForHotels'
import NavBar from '../components/Navbar'
import Spinner from 'react-bootstrap/Spinner'; //bootstrap spinner load

const TwentyToFifty = () => {

    const [cheapHotels, setCheapHotels] = useState([])
    const [spin, setSpin] = useState(true)

   const getHotels = () => { 
    axios.get("http://localhost:4000/getHotels")
         .then((res) => { 
            const docs = res.data
            console.log(docs)
            const onlyTwentyToFiftyDolars = docs.filter(hotels => hotels.averagePrice >= 20 && hotels.averagePrice <= 50)
            console.log(onlyTwentyToFiftyDolars)
            setTimeout(() => { 
                setCheapHotels(onlyTwentyToFiftyDolars)
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
      
            <NavBar />

            {spin ? <div className='load'> <Spinner animation="border" role="status"> <span className="visually-hidden">Loading...</span> </Spinner></div> 
                  :
            cheapHotels.map((cheap) => <StructureForHotels hotels={cheap}/>)}
                
       
        
         
    </div>
  )
}

export default TwentyToFifty
