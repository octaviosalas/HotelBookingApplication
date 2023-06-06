import React from 'react'
//import "../styles/continents.css"

const ContinentsItems = () => {
  return (
    <div className='component-div'>
        <div className='continents-div'>
            <button className='continent-btn' id="europe-btn">
                <p className='text-btn'>Europe</p>
                <p className='text-quantity'>More than 100 Properties</p>
             </button>
            <button className='continent-btn' id='america-btn'>
                <p className='text-btn'>America</p>
                <p className='text-quantity'>More than 100 Properties</p>
             </button>
            <button className='continent-btn' id='southamerica-btn'>
                <p className='text-btn'>SouthAmerica</p>
                <p className='text-quantity'>More than 100 Properties</p>
            </button>
            <button className='continent-btn' id='allworld-btn'>
                <p className='text-btn'>AllWorld</p>
                <p className='text-quantity'>+100 Properties</p>
            </button>
        </div>
    </div>
  )
}

export default ContinentsItems
