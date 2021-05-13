import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./Slider.css";
import { Container } from "@material-ui/core";
export const Slider = () => {

    const options = {
            0: {
                items: 1,
            },
            450: {
                items: 1.5,
            },
            800: {
                items: 2,
            },
            1200: {
                items: 3,
            },
            1400: {
                items: 3.5
            }
        }

  return (
    <>
      <Container style={{maxWidth: 1800, marginTop: 100}}>
        <OwlCarousel
          className="owl-theme"
          loop
          nav
          navText={["<div className='owl-prev'>უკან</div>"," <div className='owl-next'>წინ</div>"]}
          margin={10}
          style={{ marginTop: "20px", padding: 0,}}
          responsive={options}
        >
          <div class="item">
            <img
              alt="barca"
              class="slider-img"
              src="https://media.squawka.com/images/en/2020/02/28111823/1133986_1133986_feature_image-x-2-pictures.png"
            />
          </div>
          <div class="item">
            <img
              alt="barca"
              class="slider-img"
              src="https://media.squawka.com/images/en/2020/02/28111823/1133986_1133986_feature_image-x-2-pictures.png"
            />
          </div>
          <div class="item">
            <img
              alt="barca"
              class="slider-img"
              src="https://media.squawka.com/images/en/2020/02/28111823/1133986_1133986_feature_image-x-2-pictures.png"
            />
          </div>
          <div class="item">
            <img
              alt="barca"
              class="slider-img"
              src="https://media.squawka.com/images/en/2020/02/28111823/1133986_1133986_feature_image-x-2-pictures.png"
            />
          </div>
        </OwlCarousel>
        ;
      </Container>
    </>
  );
};
