import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import StructureItems from '../components/StructureItems'
import "../styles/hotelsstructure.css"
import usa from "../img/usa.png"
import NavBar from '../components/Navbar'
import Spinner from 'react-bootstrap/Spinner'; //bootstrap spinner load

const AmericanHotels = () => {

    const [hotels, setHotels] = useState([])
    const [load, setLoad] = useState(true)

 
    const getAmericanHotels = () => { 
       axios.get("http://localhost:4000/getHotels")
            .then((res) => { 
               const docs = res.data
               const americanHotels = docs.filter(hotel => hotel.continent === "america")
               setHotels(americanHotels)
               setTimeout(() => { 
                setLoad(false)
               }, 1500)
            })
            .catch((err) => { 
               console.log(err)
            })
    }

    useEffect(() => { 
        getAmericanHotels()
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
                 <h3 className='title'>American Hotels <img src={usa}></img></h3>
         </div>

         <div className='container-american'>
            {hotels.map((h) => <StructureItems hotels={h}/>)}
         </div>
          </> 
           }
          
    </div>
  )
}

export default AmericanHotels
