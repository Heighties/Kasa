import React from "react";
import { useState } from "react";

//Style
import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";
import "./slider.css";

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

function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="wrapper">
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
              <img className="picture" alt="" src={picture} />
            )}
          </div>
        );
      })}
      {/* get button if there are more thant one picture */}
      {length > 1 ? (
        <>
          <div className="slider__previous" onClick={prevSlide}>
            <img src={arrowLeft} alt="" className="slider__previous-icon" />
          </div>
          <div className="slider__next" onClick={nextSlide}>
            <img src={arrowRight} alt="" className="slider__next-icon" />
          </div>
        </>
      ) : null}
      {length > 1 ? (
        <div className="slider__counter">
          {current + 1}/{length}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Slider;
