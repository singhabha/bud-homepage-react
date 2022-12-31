import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ServiceHome() {
  return (
    <Container className="my-5">
      <Row className="mt-4">
        {/* <div className="col-md-4  hidden-xs hidden-sm"></div> */}
        <Col lg={1}></Col>
        <Col lg={4} sm={12}>
          <h2 style={{ letterSpacing: "1.5px" }}>AT YOUR SERVICE</h2>
          <p style={{ lineHight: "1.5px" }}>
            At Bud, we offer you total brand management services with a purpose
            of boosting brand equity. We begin by doing a thorough market
            research on various brand parameters and arrive at a brand
            positioning to win in the market place.
          </p>
          <p>
            As a creative advertising agency, we can employ some of the most
            novel ways to provide your brand a significant impetus to increase
            your sales. Check out what all we can do for you...
          </p>
        </Col>
        <Col lg={2} sm={12} className="mx-2">
          <Card style={{ width: "15rem", height: "20rem" }}>
            <img
              className="img-service"
              src="./img/brand-management.jpg"
              alt="brand-management"
            />
            <Card.Body>
              <Card.Title>BRAND MANAGEMENT</Card.Title>
              <Card.Text>
                At Bud, we offer brand management services with a purpose of
                helping you grow your brand equity.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={2} sm={12} className="mx-3">
          <Card className="card " style={{ width: "15rem", height: "20rem" }}>
            <img
              className="img-service"
              src="./img/creative-services.png"
              alt="creactive-services"
            />
            <Card.Body>
              <Card.Title>CREATIVE SERVICES</Card.Title>
              <Card.Text>
                As an idea-rich advertising agency, we employ some of the most
                novel ways of providing your brand a significant impetus to
                increase your sales.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={2} sm={12} className="mx-2">
          <Card className="card" style={{ width: "15rem", height: "20rem" }}>
            {/* style={{ width: "100%", height: "100%" }}  */}
            <img
              className="img-service"
              src="./img/digital-services.jpg"
              alt="digital-services"
            />
            <Card.Body>
              <Card.Title>DIGITAL SERVICES</Card.Title>
              <Card.Text>
                Bud Digital business solutions will help your business navigate
                the strategic mazes of digital e-commerce, SEO (search engine
                optimization), website designing, emailers, social media
                marketing, and web analytics.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </Container>
  );
}

export default ServiceHome;
