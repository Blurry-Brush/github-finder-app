import React from 'react'
import spinner from './assets/reload-cat.gif';

function Spinner() {
  return (
    <div className='w-100 mt-12'>
        <img className='h-auto text-center mx-auto w-52' src={spinner} alt="Loading..."></img>
    </div>
  )
}

export default Spinner