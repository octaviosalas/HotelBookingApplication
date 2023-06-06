import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import StructureItems from '../components/StructureItems'
import "../styles/hotelsstructure.css"
import NavBar from '../components/Navbar'
import Spinner from 'react-bootstrap/Spinner'; //bootstrap spinner load

const EuropeHotels = () => {

   const [hotels, setHotels] = useState([])
   const [load, setLoad] = useState(true)

 
    const getEuropeanHotels = () => { 
       axios.get("http://localhost:4000/getHotels")
            .then((res) => { 
               const docs = res.data
               const europeHotels = docs.filter(hotel => hotel.continent === "europa")
        
               setTimeout(() => { 
                  setHotels(europeHotels)
                  setLoad(false)
               }, 1500)
            })
            .catch((err) => { 
               console.log(err)
            })
    }

    useEffect(() => { 
        getEuropeanHotels()
    }, [])


  return (
   <div > 

   {load ? <div className='div-load'>

     <p>Loading</p>
     <Spinner animation="border" role="status"> <span className="visually-hidden">Loading...</span> </Spinner>
     </div>
      : 
      <>
     <div>
        <NavBar />
      </div>

     <div className='title-container'>
             <h3 className='title'>Europe Hotels</h3>
     </div>

     <div className='container-american'>
        {hotels.map((h) => <StructureItems hotels={h}/>)}
     </div>  
     </> 
      }     
</div>
  )
}

export default EuropeHotels
