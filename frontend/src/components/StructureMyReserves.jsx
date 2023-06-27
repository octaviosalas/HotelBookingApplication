
import * as React from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { useContext, useState } from 'react';
import { UserContext } from '../store/usercontext';
import ModalOpinions from './ModalOpinions';

const StructureMyReserves = ({reserves}) => {

    const userCtx = useContext(UserContext)
    console.log(reserves)
    
    const [showModalOpinion, setShowModalOpinion] = useState(true)
    
     
    const showModal = () => { 
      setShowModalOpinion(false)
    }

      
    const dontShowModalOpinion = () => { 
      setShowModalOpinion(true)
    }


    const deleteMyReserv = (id) => { 
        axios.post(`http://localhost:4000/deleteReserve/${userCtx.userId}`, {id: id.toString()})
             .then((res) => { 
                console.log(res.data)
                window.location.reload()
              })
              .catch((err) => { 
                console.log(err)
              })
      }


  return (
    <div style={{marginTop:"5vh"}}>
              
   
       <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>     
            <TableCell>Name</TableCell>
            <TableCell>CheckIn</TableCell>
            <TableCell>CheckOut</TableCell>
            <TableCell>Hotel Name</TableCell>
            <TableCell>Amount People</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
            <TableCell align="right">Cancel</TableCell>
            <TableCell align="right">Edit Reserv</TableCell>
            <TableCell align="right">Leave Opinion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={reserves.hotelId}>
              <TableCell>{reserves.userName}</TableCell>
              <TableCell>{reserves.checkIn}</TableCell>
              <TableCell>{reserves.checkOut}</TableCell>
              <TableCell><Link to={`/hotelDetail/${reserves.hotelId}`}>{reserves.name}</Link></TableCell>
              <TableCell>{reserves.amountPeople}</TableCell>
              <TableCell>VISA  4445 XXXX.. </TableCell>
              <TableCell align="right">{`${reserves.totalPrice} 💲`}</TableCell>
              <TableCell><button style={{color:"black", background:"#348FAC"}} onClick={() => deleteMyReserv(reserves.hotelId)}>X</button></TableCell>
              <TableCell><button style={{color:"black", background:"#348FAC"}} >Edit</button></TableCell>
              <TableCell align="right"><button style={{color:"black", background:"#348FAC"}} onClick={() => showModal()}>Opine</button></TableCell>
            </TableRow>
        </TableBody>
      </Table>
      <br />
    </React.Fragment>

    {showModalOpinion ? null : <ModalOpinions onClose={() => dontShowModalOpinion()} title={reserves.name} hotelId={reserves.hotelId}/>}


    </div>
  )
}

export default StructureMyReserves
