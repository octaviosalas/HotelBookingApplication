import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../store/usercontext';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios"
import StructureForReserves from '../components/StructureForReserves';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const MyReservations = () => {

     
    const userCtx = useContext(UserContext)
    const [reserves, setReserves] = useState([])
    const [load, setLoad] = useState(true)

    const getUserReserves = () => { 
        axios.get(`http://localhost:4000/getReserves/${userCtx.userId}`)
             .then((res) => { 
              const userReserves = res.data
              console.log(userReserves)
              setReserves(userReserves)
              setTimeout(() => { 
                  setLoad(false)
              }, 1300)
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
           {load ?  <div style={{marginTop: "20vh"}}><Box sx={{ display: 'flex' }}><CircularProgress /></Box></div>  : reserves.map((re) => <StructureForReserves reservs={re}/>)}
      
         
    </div>
  )
}

export default MyReservations

/* <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>*/
