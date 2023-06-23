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
                setReserves(res.data)
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
              <div style={{textAlign:"center", marginTop:"5vh"}}>
                    <h5 style={{fontSize:"1.9vh", marginBottom:"4vh"}}>This is your booking history</h5>
              </div>
         { reserves.map((res) =>  <StructureMyReserves reserves={res}/>)}
      </div>
  );
}