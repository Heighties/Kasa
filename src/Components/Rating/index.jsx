import React from "react";

// style
import redstar from "../../assets/redStar.svg";
import greystar from "../../assets/greyStar.svg";
import styled from "styled-components";
import "./rating.css";

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Icon = styled.img`
//   margin-right: 5px;
//   height: 25px;
// `;

function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating__wrapper">
      {/* Loop to display star by rating */}
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
