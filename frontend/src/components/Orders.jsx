import { useContext } from 'react';
import { UserContext } from '../store/usercontext';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios"
import StructureForReserves from '../components/StructureForReserves';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import StructureOrders from './StructureOrders';




export default function Orders() {


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
         <StructureOrders reserves={reserves}/>
      </div>
  );
}