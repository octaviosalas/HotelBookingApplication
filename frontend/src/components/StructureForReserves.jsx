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





const StructureForReserves = ({reservs}) => {

    console.log(reservs.hotelId)

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
                 <Button variant="outlined" startIcon={<DeleteIcon />}>Delete Reserve</Button>
                 <Button variant="contained" endIcon={<SendIcon />}>Edit Reserve</Button>
              </Stack>
          </CardActions>
        </React.Fragment>
      );
    

  return (
    <div className='myreservs-container' style={{margin: "5vh", display: "inline-flex"}}>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{card}</Card>
            </Box>
    </div>
  )
}

export default StructureForReserves


