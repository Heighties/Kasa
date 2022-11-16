import React from "react";
import { useParams } from "react-router-dom";
import Rating from "../../Components/Rating";
import Slider from "../../Components/Slider";
// import Collapse from "../../Components/Collapsible";
// import logements from '../../datas/data.json'
import Tags from "../../Components/Tags";
import Host from "../../Components/Host";
// import styled from "styled-components";
// import colors from "../../utils/style/colors";
import Error from "../Error";
import { useFetch } from "../../utils/hooks";
import Accordion from "../../Accordion";
import "./logement.css";

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
    <div className="logements">
      <Slider slides={logement.pictures} />
      <div className="content">
        <div className="informations">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="tags__wrapper">
            {logement.tags.map((tag, index) => (
              <Tags key={index} getTag={tag} />
            ))}
          </div>
        </div>
        <div className="rating__host">
          <Rating rating={logement.rating} />
          <Host host={logement.host} />
        </div>
      </div>
      <div className="collapsible">
        <Accordion title="Description" content={logement.description} />
        <Accordion title="Equipement" content={logement.equipments} />
      </div>
    </div>
  );
}

export default Logement;
