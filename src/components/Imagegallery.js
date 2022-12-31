import React from "react";
import Row from "react-bootstrap/Row";
import "./Imagegallery.css";

function Imagegallery() {
  return (
    <>
      <Row className=" my-5 grid-container">
        <div className="item1">
          <img src="./img-gallery/realestate.jpg" alt="img" />
        </div>
        <div className="item2">
          <img src="./img-gallery/furniture2.jpg" alt="img" />
        </div>
        <div className="item3">
          <img src="./img-gallery/tanisque.jpg" height={360} alt="img" />
        </div>
      </Row>
      <Row className="grid-container2">
        <div className="item1">
          <img src="./img-gallery/fashion-bud4.jpg" alt="img" />
        </div>
        <div className="item2">
          <img src="./img-gallery/fmcg5.jpg" alt="img" />
        </div>
        <div className="item2">
          <img src="./img-gallery/food6.jpg" alt="img" />
        </div>
        <div className="item2">
          <img src="./img-gallery/industrial7.jpg" alt="img" />
        </div>
      </Row>
      <Row className="grid-container3">
        <div className="item8">
          <img src="./img-gallery/branding8.jpg" alt="img" />
        </div>
        <div className="item9">
          <img src="./img-gallery/life9.jpg" alt="img" />
        </div>
        <div className="item10">
          <img src="./img-gallery/exhibition10.jpg" alt="img" />
        </div>
      </Row>
    </>
  );
}

export default Imagegallery;
