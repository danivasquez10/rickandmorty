import React, { useRef, useState } from 'react'
import './SeachForm.scss'

function SeachForm({setSeach}) {
  const inputRef = useRef()
  const [error,setError] = useState('')

  function handleSubmit(e){
  e.preventDefault()
  setError('')
  const value = inputRef.current.value.trim()
  
  if (!value){
    setError('Please enter a location id')
    return
  }

  if (isNaN(+value) || +value < 1) {
    setError('Please enter a valid number')
    return
  }

  if (+value > 126) {
    setError('Hey❗ you must provide an id from 1 to 126😁')
  }
  
  setSeach(value)
  inputRef.current.value=''
  }

  return (
   <div className='buscador'>
    <form 
       className='seach_form' 
       onSubmit={handleSubmit}>
         <div className='btn_seach'>
           <div className='botoninput'>
    <input 
        className='seach_input' 
        type="text" 
        ref={inputRef} 
        placeholder='  Enter a location id'/>

    <button className='seach_btn' >Seach</button>

        </div>
      {error && <p className='seach_error' >{error}</p>}
        </div>
    </form>
    </div>
  )
}

export default SeachForm