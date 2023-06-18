import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import axios from "axios"
import { useContext, useState } from 'react';
import { UserContext } from '../store/usercontext';
import ModalOpinions from './ModalOpinions';




const StructureForReserves = ({reservs}) => {

  const userCtx = useContext(UserContext)

  const [showModalOpinions, setShowModalOpinions] = React.useState(true)

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
  
  const showModalOpinion = () => { 
    setShowModalOpinions(false)
  }

  const dontShowModalOpinion = () => { 
    setShowModalOpinions(true)
  }
    

    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
      
      const card = (
        <React.Fragment>
          <CardContent>
           <Link to={`/hotelDetail/${reservs.hotelId}`} className='lnk'> <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom style={{cursor: "pointer"}}> <b>{reservs.name}</b> </Typography></Link> 
              <Typography variant="body2"> CheckIn: {reservs.checkIn} </Typography>
              <br />
              <Typography variant="body2"> CheckOut: {reservs.checkOut} </Typography>
              <br />
              <Typography variant="body2"> Total to Pay: {reservs.totalPrice} USD💲</Typography>
          </CardContent>
          <CardActions>
              <Stack direction="row" spacing={2}>
                 <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => deleteMyReserv(reservs.hotelId)}>Delete Reserve</Button>
                 <Button variant="contained" endIcon={<SendIcon />}>Edit Reserve</Button>
              </Stack>
          </CardActions>
                <p style={{margin:"1vh", textDecoration:"underline", cursor:"pointer"}} title="Send Opinion" onClick={() => showModalOpinion()}>If you have fulfilled your stay, you can comment on the hotel!</p>
        </React.Fragment>
      );
    

  return (
    <div className='myreservs-container' style={{margin: "5vh", display: "inline-flex"}}>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{card}</Card>
            </Box>

            {showModalOpinions ? null : <ModalOpinions onClose={() => dontShowModalOpinion()} title={reservs.name} hotelId={reservs.hotelId}/>}
    </div>
  )
}

export default StructureForReserves


