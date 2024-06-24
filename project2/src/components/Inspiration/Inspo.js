import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Inspo.css";

import ActionImage from "./Images/Action.png";
import BearImage from "./Images/Bear.png";
import BreadImage from "./Images/bread.png";
import BrewImage from "./Images/brew.png";
import CuteImage from "./Images/Cute.png";
import EitaImage from "./Images/eita.png";
import JuiceImage from "./Images/juice.png";
import WImage from "./Images/W.png";

const Inspo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [
    {
      src: WImage,
      alt: "Design W",
      caption: "Colour Palettes",
      link: "/design-w",
    },
    {
      src: ActionImage,
      alt: "Action Design",
      caption: "3D Modelling & Animation",
      link: "/action-design",
    },
    {
      src: BearImage,
      alt: "Bear Design",
      caption: "3D Modelling",
      link: "/bear-design",
    },
    {
      src: BreadImage,
      alt: "Bread Design",
      caption: "Packaging Illustration",
      link: "/bread-design",
    },
    {
      src: BrewImage,
      alt: "Typography",
      caption: "Typography",
      link: "/brew-design",
    },
    {
      src: CuteImage,
      alt: "3D Modeling",
      caption: "3D Modeling",
      link: "/cute-design",
    },
    {
      src: EitaImage,
      alt: "Eita Design",
      caption: "Colour Palettes",
      link: "/eita-design",
    },
    {
      src: JuiceImage,
      alt: "Ilustration",
      caption: "Ilustration",
      link: "/juice-design",
    },
  ];

  return (
    <div className="inspiring-designs-container">
      <h2 className="inspiring-designs-title">Explore Inspiring Designs</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-image-container">
            <a href={image.link}>
              <img className="carousel-image" src={image.src} alt={image.alt} />
              <div className="image-caption">{image.caption}</div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Inspo;
