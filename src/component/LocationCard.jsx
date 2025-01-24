import React from 'react'
import './LocationCard.scss'

function LocationCard({ubi}) {
  
    const populationCount = ubi?.residents.length
    const texPopulation = populationCount === 1 ? 'Resident' : 'Residents' 
    const idPerson = ubi?.id?.toString().padStart(3, '0')
    

  return (
   <div className='location_all'>
     <div className='location'>
        <h2 className='location_name'>{ubi?.name} #{idPerson}</h2>
        <ul className='location_details'>
            <li className='location_items'>Population: <br /><span>{populationCount} {texPopulation}</span></li>
            <li className='location_items'>Type: <br /><span>{ubi?.type}</span></li>
            <li className='location_items'>Dimension: <br /><span>{ubi?.dimension}</span></li>
        </ul>
        </div>
    </div>
  )
}

export default LocationCard