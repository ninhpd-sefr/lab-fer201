import React from "react";
import { Carousel } from "react-materialize";

export const Slider = () => {
  return (
    <div>
      <Carousel
        carouselId="Carousel-35"
        className="white-text center slider-edit"
        options={{
          fullWidth: true,
          indicators: true,
        }}
      >
        <div className="slider-item">
          <img src="https://wallpaperaccess.com/full/1986682.jpg" />
        </div>
        <div className="slider-item">
          <img src="https://wallpaperaccess.com/full/1986682.jpg" />
        </div>
        <div className="slider-item">
          <img src="https://wallpaperaccess.com/full/1986682.jpg" />
        </div>
        <div className="slider-item">
          <img src="https://wallpaperaccess.com/full/1986682.jpg" />
        </div>
      </Carousel>
    </div>
  );
};
