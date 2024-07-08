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
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const images = [
    {
      src: WImage,
      alt: "Design W",
      caption: "Colour Palettes",
      artist: "Artist Name W",
      link: "/inspiration",
    },
    {
      src: ActionImage,
      alt: "Action Design",
      caption: "3D Modelling & Animation",
      artist: "Artist Name Action",
      link: "/inspiration",
    },
    {
      src: BearImage,
      alt: "Bear Design",
      caption: "3D Modelling",
      artist: "Artist Name Bear",
      link: "/inspiration",
    },
    {
      src: BreadImage,
      alt: "Bread Design",
      caption: "Packaging Illustration",
      artist: "Artist Name Bread",
      link: "/inspiration",
    },
    {
      src: BrewImage,
      alt: "Typography",
      caption: "Typography",
      artist: "Artist Name Brew",
      link: "/inspiration",
    },
    {
      src: CuteImage,
      alt: "3D Modeling",
      caption: "3D Modeling",
      artist: "Artist Name Cute",
      link: "/inspiration",
    },
    {
      src: EitaImage,
      alt: "Eita Design",
      caption: "Colour Palettes",
      artist: "Artist Name Eita",
      link: "/inspiration",
    },
    {
      src: JuiceImage,
      alt: "Ilustration",
      caption: "Ilustration",
      artist: "Artist Name Juice",
      link: "/inspiration",
    },
  ];

  return (
    <div className="inspiring-designs-container">
      <h2 className="inspiring-designs-title">Explore Community Designs</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-image-container">
            <a href={image.link}>
              <img className="carousel-image" src={image.src} alt={image.alt} />
              <div className="image-overlay">
                <h3>{image.caption}</h3>
                <p>{image.artist}</p>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Inspo;
