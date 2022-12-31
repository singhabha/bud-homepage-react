import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./Slider";
import Hero from "./Hero";
import ServiceHome from "./ServiceHome";
import Imagegallery from "./Imagegallery";
import Client from "./Client";
import Clientslider from "./Clientslider";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Slider />
      <Hero />
      <ServiceHome />
      <Imagegallery />
      <Clientslider />
      <Client />
      <Footer />
    </>
  );
}

export default Home;
