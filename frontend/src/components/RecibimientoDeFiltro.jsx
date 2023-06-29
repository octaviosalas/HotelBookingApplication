import React, { useState } from 'react'
import { useContext, useEffect } from 'react';
import { FilterContext } from '../store/filterscontext.js';

const RecibimientoDeFiltro = () => {

  const filterCtx = useContext(FilterContext)
  const [minPrice, setMinPrice] = useState(0)
  const [servicies, setServicies] = useState(null)
  const [maxPrice, setMaxPrice] = useState(0)
  
   
  useEffect(() => { 
  
         filterCtx.searchFilters.map((filters) => { 
          setTimeout(() => { 
            setMinPrice(filters.minPrice)
            setMaxPrice(filters.maxPrice)
          }, 1000)
            
           
         })      

  }, [filterCtx.searchFilters])


  useEffect(() => {
    setTimeout(() => { 
      console.log(minPrice)
       
      console.log(maxPrice)
    }, 2000) 

 
  },[filterCtx.searchFilters])

  return (
    <div>
       <p>PRECIO MINIMO: {minPrice}</p> 
        <p>PRECIO MAXIMO: {maxPrice}</p>
    
    </div>
  )
}

export default RecibimientoDeFiltro
