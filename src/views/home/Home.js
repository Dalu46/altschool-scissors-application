import React from "react";
import NavBar from "../../components/NavBar";
import Dashboard from "../Dashboard";
import ScissorPage from "../Sccissors";
import Accordion from "./Accordion";
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import HeroBody from "./herosection/HeroBody";
import OneStop from "./OneStop";
import Pricing from "./Pricing";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <div className="">
      <NavBar />
      <HeroBody />
      <OneStop />
      <WhyUs />
      <Pricing />
      <Accordion />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Home;
