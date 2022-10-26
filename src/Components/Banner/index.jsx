import React from 'react'
import './banner.css'

function Banner({image, title}) {
  return (
    <div className='banner'>
        <img src={image} className='banner__img' alt='banner' />
        <h2 className='banner__title'>{title}</h2>
    </div>
  )
}

export default Banner