import React from "react";
import Slider from "react-slick";

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((img) => {
          return (
            <div>
              <img
                src={img}
                alt="img"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "contain",
                }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ImageSlider;
