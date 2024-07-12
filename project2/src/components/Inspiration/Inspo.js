import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

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
      alt: t("inspo.images.w.alt"),
      caption: t("inspo.images.w.caption"),
      artist: t("inspo.images.w.artist"),
      link: "/inspiration",
    },
    {
      src: ActionImage,
      alt: t("inspo.images.action.alt"),
      caption: t("inspo.images.action.caption"),
      artist: t("inspo.images.action.artist"),
      link: "/inspiration",
    },
    {
      src: BearImage,
      alt: t("inspo.images.bear.alt"),
      caption: t("inspo.images.bear.caption"),
      artist: t("inspo.images.bear.artist"),
      link: "/inspiration",
    },
    {
      src: BreadImage,
      alt: t("inspo.images.bread.alt"),
      caption: t("inspo.images.bread.caption"),
      artist: t("inspo.images.bread.artist"),
      link: "/inspiration",
    },
    {
      src: BrewImage,
      alt: t("inspo.images.brew.alt"),
      caption: t("inspo.images.brew.caption"),
      artist: t("inspo.images.brew.artist"),
      link: "/inspiration",
    },
    {
      src: CuteImage,
      alt: t("inspo.images.cute.alt"),
      caption: t("inspo.images.cute.caption"),
      artist: t("inspo.images.cute.artist"),
      link: "/inspiration",
    },
    {
      src: EitaImage,
      alt: t("inspo.images.eita.alt"),
      caption: t("inspo.images.eita.caption"),
      artist: t("inspo.images.eita.artist"),
      link: "/inspiration",
    },
    {
      src: JuiceImage,
      alt: t("inspo.images.juice.alt"),
      caption: t("inspo.images.juice.caption"),
      artist: t("inspo.images.juice.artist"),
      link: "/inspiration",
    },
  ];

  return (
    <div className="inspiring-designs-container">
      <h2 className="inspiring-designs-title">{t("inspo.title")}</h2>
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
