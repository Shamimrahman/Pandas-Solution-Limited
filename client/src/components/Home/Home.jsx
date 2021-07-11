import React from "react";
import Herosection from "../hero/Herosection";
import Process from "../process/Process";
import Motive from "../motive/Motive";
import Products from "../product/Products";
import TechInfo from "../tech/TechInfo";
import Services from "../Service/Services";
import Industry from "../Industry/Industry";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div>
      <Herosection></Herosection>
      <Services></Services>
      <Process></Process>
      <Motive></Motive>
      <Products></Products>
      <TechInfo></TechInfo>
      <Industry></Industry>
      <Contact></Contact>
    </div>
  );
};

export default Home;
