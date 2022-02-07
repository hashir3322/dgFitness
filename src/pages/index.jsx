import React from "react";
import Banner from "../components/banner/banner";
import Arrow from "../components/arrow/arrow";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";
import Video from "../components/Video/Video";
import Carousel from "../components/Carousel/carousel";
import Header from "../components/header/header";
import "../css/main.css";

const Home = () => {
  return (
    <div id="home">
      <Header />
      <Banner />
      <Arrow />
      <Video />
      <Cards />
      <Carousel />
      <Footer />
    </div>
  );
};

export default Home;
