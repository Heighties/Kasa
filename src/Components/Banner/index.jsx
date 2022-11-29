import React from "react";
import "./banner.css";

function Banner({ image, title }) {
  return (
    <div className="banner__container">
      <img className="banner__image" src={image} alt="Container" />
      <div className="banner__overlay" />
      <h1 className="banner__title">{title}</h1>
    </div>
  );
}

export default Banner;
