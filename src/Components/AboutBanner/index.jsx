import React from 'react'

function AboutBanner({image, text}) {
  return (
    <div className="banner">
      <img src={image} alt="" className="banner__img" />
      <div className="banner__overlay"></div>
      {text ? <h1 className="banner__text">{text}</h1> : null}
    </div>
  )
}

export default AboutBanner