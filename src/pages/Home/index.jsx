// import styled from 'styled-components'
import React from "react";

import Card from "../../Components/Card";
// import logements from '../../datas/data.json'
import { Link } from "react-router-dom";
import Banner from "../../Components/Banner";
import image from "../../assets/IMG.png";
// import stData from '../../datas/stData'
import Error from "../Error";
import { HomeWrap, Logements, Slogan, CardWrapper, Wrapper } from "./style";
import { useFetch } from "../../utils/hooks";
// import "../../__mock__/db.json"

function Home() {
  const {
    data: logementList,
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/logements`);

  if (isLoading) return <h1>LOADING...</h1>;

  if (error) {
    return <Error />;
  }

  console.log(logementList);

  return (
    <Wrapper>
      <Banner image={image} title={Slogan} className="banner" />
      <HomeWrap>
        <Logements>
          {logementList.map((logement) => {
            console.log(logement.id);
            return (
              <CardWrapper key={logement.id}>
                <Link to={`/logement/${logement.id}`}>
                  <Card cover={logement.cover} title={logement.title} />
                </Link>
              </CardWrapper>
            );
          })}
        </Logements>
      </HomeWrap>
    </Wrapper>
  );
}

export default Home;
