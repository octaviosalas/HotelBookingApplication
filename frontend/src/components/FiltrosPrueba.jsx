import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Buttonn from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';


function MyVerticallyCenteredModal(props) {

     const [minPrice, setMinPrice] = useState(null)
     const [maxPrice, setMaxPrice] = useState(null)
     const [continent, setContinent] = useState(null)
     const [stars, setStars] = useState(null) 
     const [showBtn, setShowBtn] = useState(true)
 
     const saveFiltersInLocalStorage = () => { 
       localStorage.setItem("minPrice", minPrice)
       localStorage.setItem("maxPrice", maxPrice)
       localStorage.setItem("stars", stars)
       localStorage.setItem("continent", continent)
       setTimeout(() => { 
        setShowBtn(false)
       }, 500)
     }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{marginLeft:"31vh"}}> Choose Filters </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormControl style={{left: '50%', transform: 'translate(-50%, -50%)'}}>
               <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"7vh", marginLeft:"12.5vh"}}>Min Price</FormLabel>
                  <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                    <FormControlLabel value="20" control={<Radio />} label="20 USD" onChange={() => setMinPrice(20)}/>
                    <FormControlLabel value="50" control={<Radio />} label="50 USD" onChange={() => setMinPrice(50)}/>
                    <FormControlLabel value="80" control={<Radio />} label="80 USD" onChange={() => setMinPrice(80)}/>      
                </RadioGroup>
              </FormControl>

              <div>
              <FormControl style={{left: '50%', transform: 'translate(-50%, -50%)'}}>
               <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"7vh", marginLeft:"12.5vh"}}>Max Price</FormLabel>
                  <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                    <FormControlLabel value="50" control={<Radio />} label="50 USD" onChange={() => setMaxPrice(50)}/>
                    <FormControlLabel value="80" control={<Radio />} label="80 USD" onChange={() =>  setMaxPrice(80)}/>
                    <FormControlLabel value="200" control={<Radio />} label="200 USD" onChange={() =>  setMaxPrice(200)}/>      
                </RadioGroup>
              </FormControl>
              </div>
              

              <div>
              <FormControl style={{left: '50%', transform: 'translate(-50%, -50%)'}}>
               <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"7vh", marginLeft:"12.5vh"}}>Stars</FormLabel>
                  <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                    <FormControlLabel value="3" control={<Radio />} label="⭐⭐⭐" onChange={() => setStars(3)}/>
                    <FormControlLabel value="4" control={<Radio />} label="⭐⭐⭐⭐" onChange={() => setStars(4)}/>
                    <FormControlLabel value="5" control={<Radio />} label="⭐⭐⭐⭐⭐" onChange={() => setStars(5)}/>      
                </RadioGroup>
              </FormControl>
              </div>

              <div>
              <FormControl style={{left: '50%', transform: 'translate(-50%, -50%)'}}>
               <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"7vh", marginLeft:"12.5vh"}}>Continent</FormLabel>
                  <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                    <FormControlLabel value="europa" control={<Radio />} label="Europe" onChange={() => setContinent("europa")}/>
                    <FormControlLabel value="america" control={<Radio />} label="America" onChange={() => setContinent("america")}/>
                    <FormControlLabel value="sudamerica" control={<Radio />} label="South America" onChange={() => setContinent("sudamerica")}/>      
                </RadioGroup>
              </FormControl>
              </div>

              <div >
                <Stack direction="row" spacing={2} >
                  {
                  showBtn ? <Buttonn variant="contained" style={{left: '50%', transform: 'translate(-50%, -50%)'}} endIcon={<SendIcon />} onClick={() => saveFiltersInLocalStorage()}>Apply</Buttonn> 
                          :
                          <Link to={"/hotelsFiltered"}><Buttonn onClick={props.onHide} style={{marginLeft: "30vh"}}>Search With Filters</Buttonn></Link>    
                }
                </Stack>
              </div>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



const FiltrosPrueba = () => {

  const [modalShow, setModalShow] = React.useState(false);


  return (
       <div>
           <>
             <Button style={{color:"black", background:"#ECF0F1", border:"none", marginTop:"0.2vh"}} onClick={() => setModalShow(true)}>  All Filters </Button>
             <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
           </>
       </div>
  )
}

export default FiltrosPrueba







