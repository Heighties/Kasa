import React from "react";
import stData from "../../datas/stData";
import image from "../../assets/mountain.png";
import Banner from "../../Components/Banner";
import Accordion from "../../Components/Accordion";
import "./about.css";

function About() {
  const content = (title) => {
    switch (title) {
      case "fiability":
        return stData.fiability;
      case "respect":
        return stData.respect;
      case "service":
        return stData.service;
      case "security":
        return stData.security;
      default:
        break;
    }
  };

  return (
    <div className="about">
      <Banner image={image} />
      <div className="collapses">
        <Accordion title="fiabilité" content={content("fiability")} />
        <Accordion title="respect" content={content("respect")} />
        <Accordion title="service" content={content("service")} />
        <Accordion title="sécurité" content={content("security")} />
      </div>
    </div>
  );
}

export default About;
