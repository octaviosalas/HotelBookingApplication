import React, { createContext, useState, useEffect } from 'react';


const FilterContext = createContext({ 
    searchFilters: [],              
    saveSearchFilters: () => {}, 
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
        <UserContext.Provider value={{searchFilters: searchFilters, addFilter: addFilter, deleteFilters: deleteFilters  }}>
          {children}
        </UserContext.Provider>
      );
    };
    
export { FilterContext, FilterProvider };
    
              