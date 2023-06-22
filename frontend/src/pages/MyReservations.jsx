import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../store/usercontext';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios"
import StructureForReserves from '../components/StructureForReserves';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Orders from '../components/Orders';

const MyReservations = () => {

     
    const userCtx = useContext(UserContext)
    const [reserves, setReserves] = useState([])
    const [load, setLoad] = useState(true)
    const [notReserves, setNotReserves] = useState(false)
    const [yesReserves, setYesReserves] = useState(false)

    const getUserReserves = () => { 
        axios.get(`http://localhost:4000/getReserves/${userCtx.userId}`)
             .then((res) => { 
              const userReserves = res.data
              console.log(userReserves)
              if(userReserves.length !== 0) { 
                  setReserves(userReserves)
                  console.log("Hay reservas")
                  console.log(userReserves)
                  setTimeout(() => { 
                    setLoad(false)
                    setYesReserves(true)
                  }, 1000)
               } else { 
                setTimeout(() => { 
                  setNotReserves(true)
                  console.log("No hay reservas")
                  setLoad(false)
                }, 1000)}
             })
             .catch((err) => { 
              console.log(err)
             })
    }
     
     useEffect(() => { 
         getUserReserves()
     }, [])


  return (
    <div>   
              

          {load ? ( 
             <div style={{ marginTop: "20vh" }}> <Box sx={{ display: 'flex' }}><CircularProgress /></Box></div>
          ) : ( 
            <>
                {yesReserves ? reserves.map((re) => <StructureForReserves reservs={re}/>) :
                <div>
                   <p style={{marginTop:"20vh"}}>You have no reservations at this time</p> 
                   <Link to={`/main/${userCtx.userId}`}><p>Back Main</p></Link>
                </div>
                 }
            </>
          )}
       
    
           
       <Orders />
         
    </div>
  )
}

export default MyReservations

/* <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>*/
    //{load ?  <div style={{marginTop: "20vh"}}><Box sx={{ display: 'flex' }}><CircularProgress /></Box></div>  : reserves.map((re) => <StructureForReserves reservs={re}/>)}