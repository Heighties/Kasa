import React from 'react'
import { useParams } from "react-router-dom";
import Rating from "../../Components/Rating"
import Slider from "../../Components/Slider"
import Collapse from "../../Components/Collapsible"
import logements from '../../datas/data.json'
import Tags from '../../Components/Tags'
import Host from '../../Components/Host';
import styled from 'styled-components';
import colors from '../../utils/style/colors';


const Logements = styled.div`
  color: ${colors.primary};
  margin: 0 5%;
`

const Content = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`

const Informations = styled.div``

const Title = styled.h1`
  margin: 0;
  font-size:  18px;
  font-weight: 500;
`

const Location = styled.p`
  font-size: 14px;
  font-weight: 500;
`

function Logement() {
  const { logementId } = useParams();
  const product = logements.find((logement) => logement.id === logementId);
  const { title, location, rating, host, equipments, description, pictures } =
    product

  return (
    <Logements>
      <Slider slides={pictures} />
      <Content>
        <Informations>
          <Title>{title}</Title>
          <Location>{location}</Location>
          <div className="logement__tags">
            {product.tags.map((tag, index) => (
              <Tags key={index} getTag={tag} />
            ))}
          </div>
        </Informations>
        <div className="logement__rating-and-host">
          <Rating rating={rating} />
          <Host host={host} />
        </div>
      </Content>
      <div className="logement__dropdowns">
        <Collapse title="description" content={description} />
        <Collapse title="équipement" content={equipments} />
      </div>
    </Logements>
  )
}

export default Logement