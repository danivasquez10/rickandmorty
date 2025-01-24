import useFetchApi from '../hoocks/useFechApi'
import { useEffect } from 'react'
import React from 'react'
import './ResidentCard.scss'

function ResidentCard({url}) {
  const {data, request, pending, error } = useFetchApi()
  

  useEffect(()=>{
    request(`${url}`)
  },[url])

  const status ={

    Alive:'🟢',
    Dead:'🔴',
    unknown:'⚪'

  }

  console.log(data);

  const episodeCount = data?.episode?.length
  const texEpisode = episodeCount === 1 ? 'Episode' : 'Epissodes' 

  return (
    <div className='residents'>
      <div>
    <div className='resident_card'>
      {pending ? <p>Cargando...</p> : (
        <div className='cartas'>
        <div className='resident_img'>
<span className='resident_status'>{status[data?.status]}{data?.status}</span>
<img src={data?.image} alt={data?.name} width={250}/>
        </div>
        <div className='resident_card_details'>
<h3 
   className='resident_name'>{data?.name}</h3>
<p className='resident_items'>Specie <br/> <span>{data?.species}</span></p>
<p className='resident_items'>Origin <br/> <span>{data?.origin?.name}</span></p>
<p className='resident_items'>Epissodes where appear <br/> <span>{episodeCount}  {texEpisode}</span></p>
        </div>
        </div>
      )}
    </div>
    </div>
    </div>
  )
}

export default ResidentCard