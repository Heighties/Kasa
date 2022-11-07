import React from 'react'
import stData from '../../datas/stData';
import Collapsible from '../../Components/Collapsible';
import image from '../../assets/mountain.png'
import styled from 'styled-components';
import Banner from '../../Components/Banner';


const Container = styled.div`
  display: flex;
  justify-content: center; 
  @media screen and (max-width: 960px){
        flex-direction: column;
        width: 100vh;
    }
`

const AboutWrapper = styled.div`
  /* min-height: calc(100vh - 304px); */
`

const Wrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  height: 20rem;
  padding-bottom: 10rem;
  @media screen and (max-width: 960px){
        flex-direction: column;
        width: 100%;
    }
`

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
      case "security":
        return stData.security
      default:
        console.log("default")
        break;
    }
  };

  return (
    <Container>
    <AboutWrapper>
      <Banner image={image}/>
        <Wrapper>
          <Collapsible title="fiabilité" content={content("fiability")} />
          <Collapsible title="respect" content={content("respect")} />
          <Collapsible title="service" content={content("service")} />
          <Collapsible title="sécurité" content={content("security")} />
        </Wrapper>
    </AboutWrapper>
    </Container>
  );
};

export default About