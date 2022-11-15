import React from "react";
import { useParams } from "react-router-dom";
import Rating from "../../Components/Rating";
import Slider from "../../Components/Slider";
import Collapse from "../../Components/Collapsible";
// import logements from '../../datas/data.json'
import Tags from "../../Components/Tags";
import Host from "../../Components/Host";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import Error from "../Error";
import { useFetch } from "../../utils/hooks";
import Accordion from "../../Accordion";

const Logements = styled.div`
  color: ${colors.primary};
  /* margin: 0 20%; */
  /* display: flex;
  justify-content: center;
  flex-direction: column; */
  align-self: center;
`;

const Content = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  @media screen and (max-width: 960px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Informations = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
`;

const Location = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Collapses = styled.div`
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 40px;
  width: 100%; */
  display: flex;
  flex-direction: row;
  gap: 40px;
  width: 100%;
  padding-bottom: 20rem;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const RatingHost = styled.div`
  margin-top: 5px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  gap: 2rem;
  @media screen and (max-width: 960px) {
    width: 100%;
    flex-direction: row;
  }
`;

function Logement() {
  const { logementId } = useParams();

  const {
    data: logement,
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/api/logements/${logementId}`);

  if (isLoading) return <h1>LOADING...</h1>;

  if (error) {
    return <Error />;
  }
  // const product = logement.find((logement) => logement.id === logementId);

  // if(!product){
  //       return(
  //         <Error />
  //       )
  //     }

  // const { logementId } = useParams();
  // const product = logements.find((logement) => logement.id === logementId);
  // if(!product){
  //   return(
  //     <Error />
  //   )
  // }
  // const { title, location, rating, host, equipments, description, pictures } =
  //   product

  return (
    <Logements>
      <Slider slides={logement.pictures} />
      <Content>
        <Informations>
          <Title>{logement.title}</Title>
          <Location>{logement.location}</Location>
          <TagsWrapper>
            {logement.tags.map((tag, index) => (
              <Tags key={index} getTag={tag} />
            ))}
          </TagsWrapper>
        </Informations>
        <RatingHost>
          <Rating rating={logement.rating} />
          <Host host={logement.host} />
        </RatingHost>
      </Content>
      <Collapses>
        <Accordion title="Description" content={logement.description} />
        <Accordion title="Equipement" content={logement.equipments} />
      </Collapses>
    </Logements>
  );
}

export default Logement;
