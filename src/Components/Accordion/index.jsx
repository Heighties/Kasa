import React from "react";
import { useState } from "react";
import "./accordion.css";
import image from "../../assets/VectorB.png";

function Accordion({ title, content }) {
  const [active, setActive] = useState(false);

  const handleToggle = (e) => {
    setActive(!active);
  };
  return (
    <div className={`collapse ${active && "active"}`}>
      <div className="collapse__title" onClick={handleToggle}>
        {title}
        {/* <span className="collapse__icon"></span> */}
        <img className="vector" alt="" src={image} />
      </div>
      <div className="collapse__content">{content}</div>
    </div>
  );
}

export default Accordion;
