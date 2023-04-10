import React from 'react'
import '../Loader/Loader.css'
import loaderGif from '../../../images/meesho-loader.gif'

export default function Loader() {
  return (
    <div className='loader'>
      <div className='loader-image'>
          <img className='loader-img-tag' src={loaderGif} alt='loader-gif'/>
      </div>
      
    </div>
  )
}
