import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./Slider.css";
export const TomorrowGamesSlider = () => {

    const options = {
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            800: {
                items: 3.5,
            },
            1200: {
                items: 4.5,
            },
            1350: {
              items: 5
          },
        }

  return (
    <>
      {/* <Container style={{width: '100%', margin: '0'}}> */}
        <OwlCarousel
          className="owl-theme"
        //   loop
          margin={10}
          style={{ marginTop: "-20px", padding: 0,}}
          responsive={options}
          dots={false}
        >
          <div class="item">
            <img
              alt="barca"
              class="slider-img-tommorow"
              src="https://cdn.thestatszone.com/uploads/thumbnails/_r169l/UCL_2021_Ro16_2ndLeg_Chelsea_Vs_Atletico.jpg"
            />
          </div>
          <div class="item">
            <img
              alt="barca"
              class="slider-img-tommorow"
              src="https://cdn.thestatszone.com/uploads/thumbnails/_r169l/UCL_2021_Ro16_2ndLeg_Chelsea_Vs_Atletico.jpg"
            />
          </div>
          <div class="item">
            <img
              alt="barca"
              class="slider-img-tommorow"
              src="https://cdn.thestatszone.com/uploads/thumbnails/_r169l/UCL_2021_Ro16_2ndLeg_Chelsea_Vs_Atletico.jpg"
            />
          </div>
          <div class="item">
            <img
              alt="barca"
              class="slider-img-tommorow"
              src="https://cdn.thestatszone.com/uploads/thumbnails/_r169l/UCL_2021_Ro16_2ndLeg_Chelsea_Vs_Atletico.jpg"
            />
          </div>
          <div class="item">
            <img
              alt="barca"
              class="slider-img-tommorow"
              src="https://cdn.thestatszone.com/uploads/thumbnails/_r169l/UCL_2021_Ro16_2ndLeg_Chelsea_Vs_Atletico.jpg"
            />
          </div>
          <div class="item">
            <img
              alt="barca"
              class="slider-img-tommorow"
              src="https://cdn.thestatszone.com/uploads/thumbnails/_r169l/UCL_2021_Ro16_2ndLeg_Chelsea_Vs_Atletico.jpg"
            />
          </div>
          <div class="item">
            <img
              alt="barca"
              class="slider-img-tommorow"
              src="https://cdn.thestatszone.com/uploads/thumbnails/_r169l/UCL_2021_Ro16_2ndLeg_Chelsea_Vs_Atletico.jpg"
            />
          </div>
          <div class="item">
            <img
              alt="barca"
              class="slider-img-tommorow"
              src="https://cdn.thestatszone.com/uploads/thumbnails/_r169l/UCL_2021_Ro16_2ndLeg_Chelsea_Vs_Atletico.jpg"
            />
          </div>
        </OwlCarousel>
        ;
      {/* </Container> */}
    </>
  );
};
