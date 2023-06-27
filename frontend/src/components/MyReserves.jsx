import { useContext } from 'react';
import { UserContext } from '../store/usercontext';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import StructureMyReserves from './StructureMyReserves';
import Spinner from 'react-bootstrap/Spinner';




export default function MyReserves() {


    const userCtx = useContext(UserContext)
    console.log(userCtx.userId)
    const [reserves, setReserves] = useState([])
    const [load, setLoad] = useState(true)
    const [notReserves, setNotReserves] = useState(false)
    const [yesReserves, setYesReserves] = useState(false)
   
     const getRes = () => { 
        axios.get(`http://localhost:4000/getReserves/${userCtx.userId}`)
             .then((res) => { 
                console.log(res.data)
                setTimeout(() => {
                  if(res.data.length !== 0) { 
                     setReserves(res.data)
                     setLoad(false)
                   } else { 
                     setNotReserves(true)
                     setLoad(false)
                   }
                }, 1500);
               
                
             })
             .catch((err) => { 
                console.log(err)
             })
     }
     
     useEffect(() => { 
        getRes()
         setTimeout(() => { 
            console.log(reserves)
         }, 1500)
     }, [])

   

  return (
      <div>
  
        {load ? (
            <Spinner animation="border" role="status" style={{marginTop:"10vh"}}>
                 <span className="visually-hidden">Loading...</span>
           </Spinner>
              ) : (
             <>
                {!notReserves && <h5 style={{marginTop:"10vh", textAlign:"center"}}>There are your Reservations</h5>} 

                {reserves.map((res) => <StructureMyReserves reserves={res} />)}

                {notReserves && <p style={{marginTop:"15vh"}}>There are no reservations at the moment. You can choose a hotel and book it!</p>}
             </>
           )}
            
        
   
      </div>
  );
}