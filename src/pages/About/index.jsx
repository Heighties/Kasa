import React from 'react'
import stData from '../../datas/stData';
import Collapse from '../../Components/Collapse';
import AboutBanner from '../../Components/AboutBanner';
import image from '../../assets/mountain.png'

function About () {
  // Switch to display content in the dropdown by title
  const content = (title) => {
    switch (title) {
      case "fiability":
        return stData.fiability
      case "respect":
        return stData.respect
      case "service":
        return stData.service
      case "sécurity":
        return stData.security
      default:
        console.log("default")
        break;
    }
  };

  return (
    <div className="about">
      <AboutBanner image={image} />
      <div className="about__dropdowns">
        <Collapse title="fiabilité" content={content("fiability")} />
        <Collapse title="respect" content={content("respect")} />
        <Collapse title="service" content={content("service")} />
        <Collapse title="sécurité" content={content("sécurity")} />
      </div>
    </div>
  );
};

export default About