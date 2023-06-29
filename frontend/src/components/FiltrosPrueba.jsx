import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SearchIcon from '@mui/icons-material/Search';
import "../styles/offcanvasfilters.css"
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Checkbox } from '@mui/material';
import RecibimientoDeFiltro from './RecibimientoDeFiltro';
import { useContext } from 'react';
import { useCallback } from 'react';
import { FilterContext } from '../store/filterscontext.js';

 

const FiltrosPrueba = () => {

   
  const filterCtx = useContext(FilterContext)

  function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const filtersChoosen = filterCtx.searchFilters

  if (!show) {
    console.log("El estado show es falso");
  }

  if (show) {
    console.log("El estado show es verdadero");
  }

  const addingFilterMinPrice = (minPrice) => {
    filterCtx.addFilter({ minPrice});
  };

  const addingFilterMaxPrice = (maxPrice) => { 
    filterCtx.addFilter({ maxPrice})
  }

  const addingFilterStars = (stars) => { 
    filterCtx.addFilter({ stars})
  }

  const addingFilterContinent = (filter) => { 
    filterCtx.addFilter({continent: filter})
  }

  const addingFilterServicies = (filter) => { 
    filterCtx.addFilter({servicies: filter})
  }

  useEffect(() => { 
       console.log(filterCtx.searchFilters)
  }, [filterCtx.searchFilters])

  
  

  return (
    <>
      <Button  style={{ backgroundColor: "#ECF0F1", color: "black", border:"none" }} onClick={handleShow} className="me-2">Filters   <SearchIcon />
      </Button>
      { show ? <Offcanvas show={show}  {...props} id="off">
        <Offcanvas.Header closeButton onClick={handleClose}>
          <div style={{marginLeft:"37vh"}}>
             <Offcanvas.Title >Filters</Offcanvas.Title>
          </div>
          <hr/>
        </Offcanvas.Header>
        <Offcanvas.Body>       
          <FormControl style={{left: '50%', transform: 'translate(-50%, -50%)'}}>
               <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"7vh", marginLeft:"12.5vh"}}>Min Price</FormLabel>
                  <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                    <FormControlLabel value="female" control={<Radio />} label="20 USD" onClick ={() => addingFilterMinPrice(20)}/>
                    <FormControlLabel value="male" control={<Radio />} label="50 USD" onChange ={() => addingFilterMinPrice(50)}/>
                    <FormControlLabel value="other" control={<Radio />} label="80 USD" onChange ={() => addingFilterMinPrice(80)}/>      
                </RadioGroup>
              </FormControl>

              <div>
              <FormControl style={{left: '52%', transform: 'translate(-50%, -50%)'}}>
               <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"7vh", marginLeft:"11vh"}}> Max Price</FormLabel>
                  <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                    <FormControlLabel value="female" control={<Radio />} label="50 USD" onChange ={() => addingFilterMaxPrice(50)}/>
                    <FormControlLabel value="male" control={<Radio />} label="80 USD" onChange ={() => addingFilterMaxPrice(80)}/>
                    <FormControlLabel value="other" control={<Radio />} label="200 USD" onChange ={() => addingFilterMaxPrice(200)}/>      
                </RadioGroup>
              </FormControl>
              </div>


              <div>
              <FormControl style={{left: '52%', transform: 'translate(-50%, -50%)'}}>
               <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"7vh", marginLeft:"18vh"}}> Stars</FormLabel>
                  <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                    <FormControlLabel value="female" control={<Radio />} label="⭐⭐⭐" onChange ={() => addingFilterStars(3)}/>
                    <FormControlLabel value="male" control={<Radio />} label="⭐⭐⭐⭐" onChange ={() => addingFilterStars(4)}/>
                    <FormControlLabel value="other" control={<Radio />} label="⭐⭐⭐⭐⭐" onChange ={() => addingFilterStars(5)}/>      
                </RadioGroup>
              </FormControl>
              </div>

              
              <div>
              <FormControl style={{left: '52%', transform: 'translate(-50%, -50%)'}}>
               <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"7vh", marginLeft:"21vh"}}> Continent</FormLabel>
                  <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                    <FormControlLabel value="female" control={<Radio />} label="Europe"  onChange ={() => addingFilterContinent("europa")}/>
                    <FormControlLabel value="male" control={<Radio />} label="SouthAmerica" onChange ={() => addingFilterContinent("sudamerica")}/>
                    <FormControlLabel value="nos" control={<Radio />} label="America" onChange ={() => addingFilterContinent("america")}/>        
                </RadioGroup>
              </FormControl>
              </div>

              <div>
              <FormControl style={{left: '52%', transform: 'translate(-50%, -50%)'}}>
               <FormLabel id="demo-row-checkbox-group-label" style={{marginTop:"7vh", marginLeft:"18vh"}}> Servicies</FormLabel>
                  <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" multiple>
                    <FormControlLabel value="female" control={<Checkbox />} label="Gym" onChange ={() => addingFilterServicies("gym")}/>
                    <FormControlLabel value="male" control={<Checkbox />} label="Wifi" onChange ={() => addingFilterServicies("wifi")}/>
                    <FormControlLabel value="nos" control={<Checkbox />} label="all meals included" onChange ={() => addingFilterServicies("all meals included")}/>      
                    <FormControlLabel value="other" control={<Checkbox />} label="beach" onChange ={() => addingFilterServicies("beach")}/>   
                </RadioGroup>
              </FormControl>
              </div>
              
              <div style={{position:"fixed", left: '50%', transform: 'translate(-50%, -50%)'}}>
                  <button onClick={() => setShow(false)}>Search</button>
              </div>
        </Offcanvas.Body>

    
      </Offcanvas> : null}
    </>
  );
}
  
  const [showStructure, setShowStructure] = useState(true)

 


  return (
   
      <>
      
      {['bottom'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
      
     
    
      </>
 
  )
}

export default FiltrosPrueba;
