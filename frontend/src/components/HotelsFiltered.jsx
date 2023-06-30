import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import Buttonn from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import StructureForHotels from './StructureForHotels';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';




const HotelsFiltered = () => {

    const [minPrice, setMinPrice] = useState(null)
    const [maxPrice, setMaxPrice] = useState(null)
    const [continent, setContinent] = useState(null)
    const [stars, setStars] = useState(null) 
    const [hotelsWithFilterChoosen, setHotelsWithFiltersChoosen] = useState([])
    const [msjNoHotels, setMsjNoHotels] = useState(false)
    const [load, setLoad] = useState(true)

    console.log(localStorage)
    const navigate = useNavigate()

    const getMinPriceLocalStorage = () => { 
          console.log("El precio minimo es " + localStorage.minPrice)
         return localStorage.getItem("minPrice")
    }

    const getMaxPriceLocalStorage = () => { 
        console.log("El precio maximo es " + localStorage.maxPrice)
        return localStorage.getItem("maxPrice")
    }

    const getStarsLocalStorage = () => { 
        console.log("Las estrellas son " + localStorage.stars)
        return localStorage.getItem("stars")
    }

    const getContinentLocalStorage = () => { 
        console.log("El continente es " + localStorage.continent)
        return localStorage.getItem("continent")
     }

     useEffect(() => {
        setTimeout(() => {
          setMinPrice(getMinPriceLocalStorage());
          setMaxPrice(getMaxPriceLocalStorage());
          setStars(getStarsLocalStorage());
          setContinent(getContinentLocalStorage());
        }, 1400);
      }, []);
          
      useEffect(() => {
        console.log(minPrice);
        console.log(maxPrice);
        console.log(continent);
        console.log(stars);
      }, [minPrice, maxPrice, continent, stars]);
    


const getHotelsFiltered = () => { 
    axios.get("http://localhost:4000/getHotels")
          .then((res) => {
            const docs = res.data
            const filtered = docs.filter(h => h.continent === continent && h.stars === parseInt(stars) && h.averagePrice >= parseInt(minPrice) && h.averagePrice <= parseInt(maxPrice))
            console.log(filtered)
            setHotelsWithFiltersChoosen(filtered)
            setTimeout(() => { 
                setLoad(false)
            }, 2600)
           
          })
          .catch((err) => {
            console.log(err)
          })
       }

    
    useEffect(() => { 
     
            getHotelsFiltered()
            console.log(hotelsWithFilterChoosen)
      
    }, [minPrice, maxPrice, stars, continent])
   

    /*function cleanLocalStorage(properties) {
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (properties.includes(key)) {
      localStorage.removeItem(key);
    }
  }
}

// Uso de ejemplo
var propertiesToDelete = ["propiedad1", "propiedad2", "propiedad3"];
cleanLocalStorage(propertiesToDelete);*/


const propertysToDeleteOfLocalStorage = ["maxPrice", "continent", "stars", "minPrice"];

const cleanLocalStorage = (deleteItem) => {
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (deleteItem.includes(key)) {
      localStorage.removeItem(key);
    }
  }
  setTimeout(() => { 
      console.log(localStorage)
      navigate("/allHotels")
  }, [])
}




  return (
    <div>
          {load ? null : <p style={{marginTop:"3vh", cursor:"pointer"}} onClick={() => cleanLocalStorage(propertysToDeleteOfLocalStorage)}>Delete Filters</p>}
      
           {load ? ( 
             <div style={{marginTop:"25vh"}}> <Spinner animation="border" /> </div>   
            ) : ( 
                hotelsWithFilterChoosen.map((h) => <StructureForHotels hotels={h}/>)
                
            )}

           
    </div>
  )
}

export default HotelsFiltered
