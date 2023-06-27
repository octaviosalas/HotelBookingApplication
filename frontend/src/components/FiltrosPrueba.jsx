import React, { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

 
   

const FiltrosPrueba = () => {

   
    const [filters, setFilters] = useState([])

  useEffect(() => { 
     console.log(filters)
  }, [filters])

  return (
    <div>
         <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       Choose your filter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={() => setFilters("3estrellas")}>3 estrellas</Dropdown.Item>
        <Dropdown.Item href="#/action-2"  onClick={() => setFilters("20usd")}>De 20 a 50 USD</Dropdown.Item>
        <Dropdown.Item href="#/action-3">EUROPA</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}

export default FiltrosPrueba
