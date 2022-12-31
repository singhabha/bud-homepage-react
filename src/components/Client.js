import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Stack from "react-bootstrap/Stack";
import "./Client.css";

function Client() {
  return (
    <>
      <Container>
        <Row className=" heading justify-content-md-center">
          We enjoy working with these amazing clients
        </Row>

        <Carousel className="d-flex m-2 p-4">
          <Carousel.Item
            interval={500}
            className=" client-img"
            style={{ zIndex: "0" }}
          >
            <Stack
              direction="horizontal"
              h-100
              justify-content-center
              align-items-center
              gap={1}
            >
              <img
                className=" w-20 mx-8"
                src="clients_logo/L_Rugtek.png"
                alt="First slide"
              />
              <img
                className=" w-20 ml-2"
                src="clients_logo/L_Prestige.png"
                alt="img"
              />
              <img
                className=" w-20"
                src="clients_logo/L_Louis Philippe.png"
                alt="img"
              />
              <img
                className=" w-20"
                src="clients_logo/L_Aabhushan.png"
                alt="img"
              />
              <img
                className=" w-20"
                src="clients_logo/L_Britannia.png"
                alt="img"
              />
              <img className=" w-20" src="clients_logo/L_DSR.png" alt="img" />
              <img
                className=" w-20"
                src="clients_logo/L_Furnaffair.png"
                alt="img"
              />
            </Stack>
          </Carousel.Item>
          <Carousel.Item className="client-img">
            <Stack
              direction="horizontal"
              h-100
              justify-content-center
              align-items-center
              gap={1}
            >
              <img
                className=" w-20"
                src="clients_logo/L_Ganga Kaveri.png"
                alt="img"
              />
              <img
                className=" w-20"
                src="clients_logo/L_Sulochana.png"
                alt="img"
              />
              <img
                className=" w-20"
                src="clients_logo/L_Tata Sky.png"
                alt="img"
              />
              <img
                className="d-block w-20"
                src="clients_logo/L_Wipro.png"
                alt="img"
              />
              <img
                className="d-block w-20"
                src="clients_logo/Logo scaling-17.png"
                alt="img"
              />
              <img
                className=" w-20"
                src="clients_logo/Logo scaling-18.png"
                alt="img"
              />
              <img
                className=" w-20"
                src="clients_logo/Logo scaling-19.png"
                alt="img"
              />
            </Stack>
          </Carousel.Item>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              h-100
              justify-content-center
              align-items-center
              gap={1}
            >
              <img
                className=" w-20"
                src="clients_logo/Logo scaling-20.png"
                alt="img"
              />
              <img
                className=" w-20"
                src="clients_logo/L_Tata Sky.png"
                alt="img"
              />
              <img
                className="d-block w-20"
                src="clients_logo/L_Wipro.png"
                alt="img"
              />
              <img
                className="d-block w-20"
                src="clients_logo/Logo scaling-17.png"
                alt="img"
              />
              <img
                className=" w-20 mx-8"
                src="clients_logo/L_Rugtek.png"
                alt="First slide"
              />
              <img
                className=" w-20 ml-2"
                src="clients_logo/L_Prestige.png"
                alt="img"
              />
              <img
                className=" w-20"
                src="clients_logo/L_Louis Philippe.png"
                alt="img"
              />
            </Stack>
          </Carousel.Item>
        </Carousel>
      </Container>
      <section>
        <div className="col-md-12 my-5">
          <div className="col-md-2"></div>
          <div className="row col-md-12">
            <div className="col-md-4  hidden-xs hidden-sm"></div>
            <div class="col-md-4">
              <center>
                {" "}
                <a href="https://www.google.com/partners/agency?id=7107078505">
                  <Button
                    style={{ color: "black" }}
                    variant="outline-danger"
                    size="lg"
                  >
                    Our International Portfolio
                  </Button>
                </a>
              </center>
            </div>
            <div className="col-md-4  hidden-xs hidden-sm"></div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="container">
          <div className="row">
            <br />
            {/* style={{text-align:center;font-size:2em;color:red!important;text-transform:uppercase;margin-bottom:"20px"}} */}
            <h2
              classNane="rdd"
              style={{
                fontSize: "2em",
                color: "red",
                marginBottom: "20px",
                textAlign: "center",
                fontWeight: "normal",
                letterSpacing: "1.5px",
              }}
            >
              WE ARE RECOGNISED AS A:
            </h2>
            <div className="col-md-12">
              <div className="col-md-2"></div>
              <div className="row col-md-12">
                <div className="col-md-4  hidden-xs hidden-sm"></div>
                <div class="col-md-4">
                  <center>
                    {" "}
                    <a href="https://www.google.com/partners/agency?id=7107078505">
                      <img
                        src="https://www.budindia.com/images/gp.png"
                        className="img-responsive"
                        alt="digital marketing services certified by Google Analytics"
                      />
                    </a>
                  </center>
                </div>
                <div className="col-md-4  hidden-xs hidden-sm"></div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
        <br />
      </section>
    </>
  );
}

export default Client;
