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
          <img src="https://orig00.deviantart.net/d453/f/2011/201/d/d/the_amazing_spider_man_banner_by_barney_01-d4141q2.jpg" />
        </div>
        <div className="slider-item">
          <img src="https://ic-cdn.flipboard.com/flipboard.com/23144bf6f0530c8b6ffa3bd6bfbd0e5005165197/_xlarge.jpeg" />
        </div>
        <div className="slider-item">
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/dbllnxe-4642efe6-9a0b-4486-854d-de7d9f8576b3.jpg/v1/fill/w_1610,h_496,q_70,strp/transformers_cinematic_universe_banner_by_the_dark_mamba_995_dbllnxe-pre.jpg" />
        </div>
        <div className="slider-item">
          <img src="https://wallpaperaccess.com/full/1986682.jpg" />
        </div>
      </Carousel>
    </div>
  );
};
