import React from 'react'
import axios from 'axios';
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../store/usercontext.js'
import StructureForHotels from '../components/StructureForHotels.jsx';
import { Navbar } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'; //bootstrap spinner load
import NavBar from '../components/Navbar.jsx';
import "../styles/structurehotels.css"
import { Link } from 'react-router-dom';

const FavouritesHotels = () => {
 
  const userCtx = useContext(UserContext)
  const [favourites, setFavourites] = useState([])
  const [spin, setSpin] = useState(true)
  const [msj, setMsj] = useState(false)
  

  const getFavourites = () => { 
    return axios.get(`http://localhost:4000/getFavouritesHotelsOfUser/${userCtx.userId}`)
         .then((res) => {
          console.log(res.data)
          if(res.data.length !== 0) { 
            setTimeout(() => { 
              setFavourites(res.data)
               setSpin(false)
            }, 1000)
          } else { 
            setTimeout(() => { 
               setMsj(true)
               setSpin(false)
            }, 1000)
          }
          
         })
         .catch((err) => console.log(err))
  }

  useEffect(() => { 
      getFavourites()            
  }, [])

 
  return (
    <div> 
       <NavBar/>
      
        {spin ? 
            <div className='load'>
                   <Spinner animation="border" role="status"> <span className="visually-hidden">Loading...</span> </Spinner>
            </div>   :   favourites.map((f) => <StructureForHotels hotels={f}/>)}

           {msj &&  <div className='loading-div'>
                       <p>At the moment you have not saved hotels in your favorites list.</p>
                       <Link to={"/allHotels"}><p>Go Main</p></Link>  
                    </div>

} 


    </div>
  )
}

export default FavouritesHotels
