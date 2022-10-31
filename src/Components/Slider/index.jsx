import React from "react";
import { useState } from "react";

//Style
import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";
import styled from "styled-components";
import "./style.css"

const Wrapper = styled.div`
    position: relative;
`

const SliderPrevious = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 20px;
`

const SliderNext = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    right: 0;
    cursor: pointer;
    margin-right: 20px;
`

const Picture = styled.img`
    width: inherit;
    height: inherit;
    object-fit: cover;
    border-radius: 10px;
`

// const ActivePicture = styled.div`
//     height: 255px;
//     width: 2px;
//     transform: scale(1);
//     transition: transform 300ms;
// `

// const InactivePicture = styled.div`
//     transform: scale(1.05);
//     transition: transform 300ms;
// `

function Slider({ slides }){
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <Wrapper>
      {slides.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "slide slider__active-picture"
                : "slide slider__inactive-picture"
            }
          >
            {index === current && (

            <Picture src={picture}/>
            )}
          </div>
        );
      })}
      {/* get button if there are more thant one picture */}
      {length > 1 ? (
        <>
          <SliderPrevious onClick={prevSlide}>
            <img src={arrowLeft} alt="" className="slider__previous-icon" />
          </SliderPrevious>
          <SliderNext onClick={nextSlide}>
            <img src={arrowRight} alt="" className="slider__next-icon" />
          </SliderNext>
        </>
      ) : null}
    </Wrapper>
  );
};

export default Slider;
