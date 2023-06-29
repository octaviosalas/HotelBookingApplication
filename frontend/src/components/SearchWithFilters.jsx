import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import Buttonn from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import StructureForHotels from './StructureForHotels';
import { Link } from 'react-router-dom';


const SearchWithFilters = () => {

    const [minPrice, setMinPrice] = useState(null)
    const [maxPrice, setMaxPrice] = useState(null)
    const [continent, setContinent] = useState(null)
    const [stars, setStars] = useState(null) 
    const [hotelsWithFilterChoosen, setHotelsWithFiltersChoosen] = useState([])

    const getMinPriceLocalStorage = () => { 
         return localStorage.getItem("minPrice")
    }

    const getMaxPriceLocalStorage = () => { 
        return localStorage.getItem("maxPrice")
    }

    const getStarsLocalStorage = () => { 
     return localStorage.getItem("stars")
    }

    const getContinentLocalStorage = () => { 
      return localStorage.getItem("continent")
     }

    
const getHotelsFiltered = () => { 
    axios.get("http://localhost:4000/getHotels")
          .then((res) => {
            const docs = res.data
            const filtered = docs.filter(h => h.continent === continent && h.stars === parseInt(stars) && h.averagePrice >= parseInt(minPrice) && h.averagePrice <= parseInt(maxPrice))
            console.log(filtered)
            setHotelsWithFiltersChoosen(filtered)
          })
          .catch((err) => {
            console.log(err)
          })
}

    useEffect(() => { 
        setMinPrice(getMinPriceLocalStorage())
        setMaxPrice(getMaxPriceLocalStorage())
        setStars(getStarsLocalStorage())
        setContinent(getContinentLocalStorage())
    }, [])

    

  return (
    <div>
       <Buttonn variant="contained" style={{left: '170%', transform: 'translate(-50%, -50%)'}} endIcon={<SendIcon />} onClick={() => getHotelsFiltered()}>Search With Filters</Buttonn>
        {hotelsWithFilterChoosen.map((fil) => <StructureForHotels hotels={fil}/>)}

    </div>
  )
}

export default SearchWithFilters
 


/*import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import Buttonn from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import StructureForHotels from './StructureForHotels';
import { Link } from 'react-router-dom';


const SearchWithFilters = ({closeModal}) => {

   const [minPrice, setMinPrice] = useState(null)
    const [maxPrice, setMaxPrice] = useState(null)
    const [continent, setContinent] = useState(null)
    const [stars, setStars] = useState(null) 
    const [hotelsWithFilterChoosen, setHotelsWithFiltersChoosen] = useState([])

    const getMinPriceLocalStorage = () => { 
         return localStorage.getItem("minPrice")
    }

    const getMaxPriceLocalStorage = () => { 
        return localStorage.getItem("maxPrice")
    }

    const getStarsLocalStorage = () => { 
     return localStorage.getItem("stars")
    }

    const getContinentLocalStorage = () => { 
      return localStorage.getItem("continent")
     }

    
const getHotelsFiltered = () => { 
    axios.get("http://localhost:4000/getHotels")
          .then((res) => {
            const docs = res.data
            const filtered = docs.filter(h => h.continent === continent && h.stars === parseInt(stars) && h.averagePrice >= parseInt(minPrice) && h.averagePrice <= parseInt(maxPrice))
            console.log(filtered)
            setHotelsWithFiltersChoosen(filtered)
          })
          .catch((err) => {
            console.log(err)
          })
}

    useEffect(() => { 
        setMinPrice(getMinPriceLocalStorage())
        setMaxPrice(getMaxPriceLocalStorage())
        setStars(getStarsLocalStorage())
        setContinent(getContinentLocalStorage())
    }, [])


    

  return (
    <div>
      <Link to={"/hotelsFiltered"}><Buttonn variant="contained" style={{left: '170%', transform: 'translate(-50%, -50%)'}} endIcon={<SendIcon />} >Search With Filters</Buttonn></Link> 
    </div>
  )
}

export default SearchWithFilters

*/