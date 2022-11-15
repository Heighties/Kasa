import React from "react";
import stData from "../../datas/stData";
import image from "../../assets/mountain.png";
import styled from "styled-components";
import Banner from "../../Components/Banner";
import Accordion from "../../Accordion";
import "./about.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100vh;
  }
`;

const AboutWrapper = styled.div`
  /* min-height: calc(100vh - 304px); */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  height: 20rem;
  padding-bottom: 10rem;
  width: 800px;
  gap: 20px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
`;

function About() {
  // Switch to display content in the dropdown by title
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
        console.log("default");
        break;
    }
  };

  return (
    // <Container>
    <div className="about">
      {/* <AboutWrapper> */}
      <Banner image={image} />
      {/* <Wrapper> */}
      <div className="collapses">
        <Accordion title="fiabilité" content={content("fiability")} />
        <Accordion title="respect" content={content("respect")} />
        <Accordion title="service" content={content("service")} />
        <Accordion title="sécurité" content={content("security")} />
      </div>
      {/* </Wrapper> */}
      {/* </AboutWrapper> */}
    </div>
    // </Container>
  );
}

export default About;
