import React from "react";

// style
import redstar from "../../assets/redStar.svg";
import greystar from "../../assets/greyStar.svg";

import "./rating.css";

function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating__wrapper">
      {stars.map((star) =>
        rating >= star ? (
          <img
            className="rating__icon"
            key={star.toString()}
            src={redstar}
            alt=""
          />
        ) : (
          <img
            className="rating__icon"
            key={star.toString()}
            src={greystar}
            alt=""
          />
        )
      )}
    </div>
  );
}

export default Rating;
