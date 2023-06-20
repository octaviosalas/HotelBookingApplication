import * as React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


const Opinions = ({hotelName, hotelOpinions}) => {

    console.log(hotelOpinions)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
         <>
      <p variant="primary" style={{textDecoration:"underline",  cursor:"pointer"}} onClick={handleShow}>More than {hotelOpinions.length} reviews.</p>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{hotelName}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {hotelOpinions.map((opinions) => { 
                return (
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                   <ListItem alignItems="flex-start">
                      <ListItemAvatar> <Avatar alt="Remy Sharp" src={"/static/images/avatar/1.jpg"} /> </ListItemAvatar>
                         <ListItemText primary={opinions.userName} secondary={
                            <React.Fragment>
                              <Typography  sx={{ display: 'inline' }} component="span" variant="body2"  color="text.primary" >Puntuaction: {opinions.puntuaction}</Typography> {opinions.opinion}
                          </React.Fragment>}/>
                   </ListItem>
               <Divider variant="inset" component="li" />
            </List> 
            )
              
            })}
       
 
        </Offcanvas.Body>
      </Offcanvas>
    </>
    </div>
  )
}

export default Opinions
