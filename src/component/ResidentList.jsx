import React from 'react'
import ResidentCard from './ResidentCard'

function ResidentList({residents}) {
 
  return (
    <div>
      {residents?.length > 0 ? (<>{
        residents?.map(resident=>(<ResidentCard 
                                    key={resident} 
                                    url={resident}/>))
      }</>) 
      : (<p>No hay residentes</p>)}
    </div>
  )
}

export default ResidentList