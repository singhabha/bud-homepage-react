import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Clientslider.css";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
function Clientslider() {
  return (
    <>
      <div className="my-5 title">
        <h2 className="wavy text-center">FROM THE DIGITAL PAN!</h2>
      </div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <Row>
            <Col lg={1}></Col>
            <Col lg={1}>
              <div style={{ height: "10rem" }}></div>{" "}
              <AiOutlineArrowLeft size={20} />
            </Col>
            <Col lg={4}>
              <img
                className="d-block w-100"
                src="./img/rugtek.png"
                alt="First slide"
              />
            </Col>
            <Col lg={3} sm={12} className="client-content">
              <h3>Rugtek - Meticulous Marvel</h3>
              <p>
                Another feather on our cap was the website created for a POS &
                peripheral manufacturer, RUGTEK. The technical content for the
                several product categories was carefully curated to cater to
                both B2C and B2B market segments. The interface of the website
                catering to the unique needs of a hardware company demanded a
                picture-perfect layout with a clear-cut representation of their
                product foray. The site was neatly elevated to an e-commerce
                platform enabling the target customers PAN India, to trade
                smoothly, without any hassle.
              </p>
              <div className="client-link-div">
                <a href="https://www.rugtek.com/" style={{ color: "black" }}>
                  www.rugtek.com
                </a>
                <br />
                <span className="client-lang">WORDPRESS, BOOTSTRAP</span>
              </div>
            </Col>
            <Col lg={1}></Col>
            <Col lg={1}>
              <div style={{ height: "10rem" }}></div>{" "}
              <AiOutlineArrowRight size={20} />
            </Col>
            <Col lg={1}></Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <Row>
            <Col lg={1}></Col>
            <Col lg={1}>
              <div style={{ height: "10rem" }}></div>{" "}
              <AiOutlineArrowLeft size={20} />
            </Col>
            <Col lg={4}>
              <img
                className="d-block w-100"
                src="./img/sulochana.png"
                alt="second slide"
              />
            </Col>
            <Col lg={3} sm={12} className="client-content">
              <h3>Sulochana - Spinning websites with the ethos</h3>
              <p>
                {" "}
                Another star-studded website was created for SULOCHANA COTTON
                SPINNING MILLS PRIVATE LIMITED. To match the philosophy of the
                brand, mood boards were drafted. Then each and every section of
                the website was designed to echo its unique ethos. The flow of
                the website was designed in such a way that it voiced the pride
                journey of four generations of the company, end to end.
              </p>
              <div className="client-link-div">
                <a href="https://sulochanamills.in/" style={{ color: "black" }}>
                  www.sulochanamills.in
                </a>
                <br />
                <span className="client-lang">WORDPRESS, BOOTSTRAP</span>
              </div>
            </Col>
            <Col lg={1}></Col>
            <Col lg={1}>
              <div style={{ height: "10rem" }}></div>{" "}
              <AiOutlineArrowRight size={20} />
            </Col>
            <Col lg={1}></Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col lg={1}></Col>
            <Col lg={1}>
              <div style={{ height: "10rem" }}></div>{" "}
              <AiOutlineArrowLeft size={20} />
            </Col>
            <Col lg={4}>
              <img
                className="d-block w-100"
                src="./img/skypod.png"
                alt="Third slide"
              />
            </Col>
            <Col lg={3} sm={12} className="pt-2 client-content">
              <h3>Skypods - Redefining Fun</h3>
              <p>
                An immersive landing page was created for the company called,
                SKYPODS. We had to develop a redefining layout, creative enough
                to support the requisites of the gaming platform. We challenged
                our creativity bringing up, a complete out-of-box theme where
                funky colours are smartly played putting forth an attractive
                offbeat tone. We added a magical touch by creating eye-catchy
                animations so that the end-users could enjoy a fun-filled
                experience as desired by the client.
              </p>
              <div className="client-link-div">
                <a
                  href="https://www.skypodsbattlearena.com/ "
                  style={{ color: "black" }}
                >
                  www.skypodsbattlearena.com
                </a>
                <br />
                <span className="client-lang">HTML, CSS , JAVACSRIPT</span>
              </div>
            </Col>
            <Col lg={1}></Col>
            <Col lg={1}>
              <div style={{ height: "10rem" }}></div>{" "}
              <AiOutlineArrowRight size={20} />
            </Col>
            <Col lg={1}></Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Clientslider;
