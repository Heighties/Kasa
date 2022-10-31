import React from "react";

// style
import redstar from "../../assets/redStar.svg";
import greystar from "../../assets/greyStar.svg";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

const Icon = styled.img`
    margin-right: 5px;
    height: 25px;
`

function Rating({ rating }){
  const stars = [1, 2, 3, 4, 5];

  return (
    <Wrapper>
      {/* Loop to display star by rating */}
      {stars.map((star) =>
        rating >= star ? (
        <Icon key={star.toString()} src={redstar} alt=''/>
        ) : (
        <Icon key={star.toString()} src={greystar} alt=''/>
        )
      )}
    </Wrapper>
  );
};

export default Rating;
