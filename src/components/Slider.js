import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel >
      <Carousel.Item>
        <img className="d-block w-100 img " src="banner3.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img " src="BAnner.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img" src="slide01.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
