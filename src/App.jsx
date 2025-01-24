import './App.scss'
import { useEffect, useState } from 'react'
import useFetchApi from './hoocks/useFechApi'
import LocationCard from './component/LocationCard'
import ResidentList from './component/ResidentList'
import SeachForm from './component/SeachForm'
import { ids } from './utils'

const baseUrl = 'https://rickandmortyapi.com/api'

function App() {
 
  const {data, request, pending, error } = useFetchApi()
  const [seach,setSeach] = useState(ids(126))

  useEffect(()=>{
    request(`${baseUrl}/location/${seach}`)
  },[seach])
  

  return (

      <div>
    
     <h1>.</h1>
     <SeachForm setSeach={setSeach}/>
     {pending ? <p>Cargando...</p> : (<LocationCard ubi={data} />)} 
     {!pending && <ResidentList residents={data?.residents}/>
     }
      </div>
    
  )
}

export default App
