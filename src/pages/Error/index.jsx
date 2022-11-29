import React from "react";
import { Link } from "react-router-dom";
import "./error.css";

function Error() {
  return (
    <div className="error__wrapper">
      <div className="error__content">
        <p className="error__number">404</p>
        <p className="error__text">
          Oups! La page que vous demandez n'existe pas
        </p>
      </div>
      <Link className="error__link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
