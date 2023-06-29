import React, { createContext, useState, useEffect } from 'react';


const FilterContext = createContext({ 
    searchFilters: [],              
    addFilter: () => {}, 
    deleteSearchFilters: () => {}   
});


const FilterProvider = ({ children }) => {                       
   
    const [searchFilters, setSearchFilters] = useState([])

      const addFilter = (newFilter) => { 
        setSearchFilters([...searchFilters, newFilter])
      }

      const deleteFilters = () => { 
        setSearchFilters([])
     }
    
      return (
        <FilterContext.Provider value={{searchFilters, addFilter, deleteFilters  }}>
          {children}
        </FilterContext.Provider>
      );
    };
    
export { FilterContext, FilterProvider };
    
              