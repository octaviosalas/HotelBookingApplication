import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import StructureItems from '../components/StructureItems'
import "../styles/hotelsstructure.css"
import usa from "../img/usa.png"
import NavBar from '../components/Navbar'
import Spinner from 'react-bootstrap/Spinner'; //bootstrap spinner load



const AllWorldHotels = () => {


    
    const [hotels, setHotels] = useState([])
    const [load, setLoad] = useState(true)

 
    const getAllHotels = () => { 
       axios.get("http://localhost:4000/getHotels")
            .then((res) => { 
               const docs = res.data
               setTimeout(() => { 
                  setHotels(docs)
                  setLoad(false)
               }, 1500)
              
            })
            .catch((err) => { 
               console.log(err)
            })
    }

    useEffect(() => { 
        getAllHotels()
    }, [])


  return (
   <div > 
       {load ? <div className='loading-div'>        
                    <Spinner animation="border" role="status"> <span className="visually-hidden">Loading...</span></Spinner>
               </div>
            : 
            <>

            <NavBar />
      
         <div className='title-container'>
            <h3 className='title'>All Our Hotels</h3>
         </div>

         <div className='container-american'>
            {hotels.map((h) => <StructureItems hotels={h}/>)}
         </div> 
       </> 
       }  
  </div>
  )
}

export default AllWorldHotels
