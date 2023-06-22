
import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../store/usercontext';

const StructureOrders = ({reserves}) => {

    const userCtx = useContext(UserContext)

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
    <div>
       <React.Fragment>
      <h5 style={{fontSize:"1.3vh", marginBottom:"4vh"}}>This is your booking history</h5>
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
            <TableCell align="right">Leave Opinion</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {reserves.map((row) => (

            <TableRow key={row.hotelId}>
              <TableCell>{row.userName}</TableCell>
              <TableCell>{row.checkIn}</TableCell>
              <TableCell>{row.checkOut}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.amountPeople}</TableCell>
              <TableCell>VISA  4445 XXXX.. </TableCell>
              <TableCell align="right">{`${row.totalPrice} 💲`}</TableCell>
              <TableCell><button style={{color:"black", background:"#348FAC"}} onClick={() => deleteMyReserv(row.hotelId)}>X</button></TableCell>
              <TableCell align="right"><button style={{color:"black", background:"#348FAC"}}>Opine</button></TableCell>
            </TableRow>

          ))}
        </TableBody>
      </Table>
    </React.Fragment>
    </div>
  )
}

export default StructureOrders
