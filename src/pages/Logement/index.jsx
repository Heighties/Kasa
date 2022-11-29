import React from "react";
import { useParams } from "react-router-dom";
import Rating from "../../Components/Rating";
import Slider from "../../Components/Slider";

import Tags from "../../Components/Tags";
import Host from "../../Components/Host";

import Error from "../Error";

import Accordion from "../../Components/Accordion";
import "./logement.css";
import { useFetch } from "../../utils/hooks";

function Logement() {
  const { logementId } = useParams();

  const {
    data: logement,
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/logements/${logementId}`);

  if (isLoading) return <h1>LOADING...</h1>;

  if (error) {
    return <Error />;
  }

  return (
    <div className="logements__page">
      <div className="logements__wrapper">
        <Slider slides={logement.pictures} />
        <div className="content">
          <div className="informations">
            <h1>{logement.title}</h1>
            <p className="logement__location">{logement.location}</p>
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
    </div>
  );
}

export default Logement;
