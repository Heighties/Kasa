import React from "react";

import Card from "../../Components/Card";
import { Link } from "react-router-dom";
import Banner from "../../Components/Banner";
import image from "../../assets/IMG.png";
import Error from "../Error";
import { useFetch } from "../../utils/hooks";
import stData from "../../datas/stData";
import "./home.css";

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

  const Slogan = stData.slogan;

  return (
    <div className="wrapper">
      <Banner image={image} title={Slogan} className="banner" />
      <div className="home__wrap">
        <section className="logements__section">
          {logementList.map((logement) => {
            return (
              <article className="card__wrapper" key={logement.id}>
                <Link to={`/logement/${logement.id}`}>
                  <Card cover={logement.cover} title={logement.title} />
                </Link>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Home;
