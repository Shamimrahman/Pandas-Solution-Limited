import React from "react";
import Herosection from "../hero/Herosection";
import Process from "../process/Process";
import Motive from "../motive/Motive";
import Products from "../product/Products";
import TechInfo from "../tech/TechInfo";
const Home = () => {
  return (
    <div>
      <Herosection></Herosection>
      <Process></Process>
      <Motive></Motive>
      <Products></Products>
      <TechInfo></TechInfo>
      <Motive></Motive>
    </div>
  );
};

export default Home;
