import React from "react";
import "./host.css";

function Host({ host }) {
  const isHostSplited = host.name.split(" ");
  const [name, lastname] = isHostSplited;

  return (
    <div className="host__wrapper">
      <div className="host__name">
        <p className="host__firstname">{name.trim()}</p>
        <p className="host__lastname">{lastname.trim()}</p>
      </div>
      <img className="host__picture" src={host.picture} alt="" />
    </div>
  );
}

export default Host;
