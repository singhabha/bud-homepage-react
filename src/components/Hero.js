import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import budvideo from "../assets/budvideo.mp4";

function Hero() {
  return (
    <Container>
      <Row>
        <Col
          className="d-flex align-items-center justify-content-center"
          lg={4}
          sm={12}
        >
          <img
            className="align-items-center mt-4"
            src="bud13year.jpg"
            alt="img"
          />
        </Col>
        <Col lg={8} sm={12} className="mt-4">
          <h3>Creative Advertising Agency in Bangalore</h3>
          <p>
            Advertising should never get boring... Just why we at Bud dish out
            'fresh ideas' to our clients. We keep our creative simple, focused
            and 'result oriented'. Because there can never be a 'happy office
            party' when the sales guy isn't happy!
          </p>

          <p>
            Bud is a creative boutique growing out of Bangalore. It's an ad
            agency which believes in churning out 'fresh' ideas and staying
            'young' always (can we say, like a rose bud!). We believe in the
            philosophy of being a 'Small Big Ad Agency', i.e., offering 'big'
            ideas from a small set up... that help you sell more.
          </p>
          <p>
            Our integrated communication solutions enable brands to leverage
            their strength across advertising, digital, and print production
            mediums.
          </p>
          <p>
            From a humble beginning in 2010, Bud decided to change the game
            plan. Instead of creating a brand which is ubiquitous, we create
            communication that is unique. We aspire to become the 'best ad
            agency' of Bangalore and are powered by the best brains in creative
            and branding.
          </p>
          {/*row for images  */}
          <Row>
            <Col lg={5} sm={12} className="case-study">
              <a href="https://www.budindia.com/">
                <img
                  src="https://www.budindia.com/images/casepng.png"
                  alt="case-study-img"
                />
                <b>CASE STUDY</b>
              </a>
            </Col>
            <Col lg={1} sm={12}></Col>
            <Col lg={6} sm={12} classNamestart-ups-img>
              <a href="https://www.budindia.com/">
                <img
                  src="https://www.budindia.com/images/ps.png"
                  alt="start-up-img"
                />
                <b>DIGITAL SOLUTIONS FOR START-UPS!</b>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* row for video */}
      <Row className="my-4 ">
        <video autoPlay loop muted>
          <source src={budvideo} type="video/mp4"></source>
        </video>
      </Row>
    </Container>
  );
}

export default Hero;
