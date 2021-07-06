import React from "react";
import "@material-tailwind/react/tailwind.css";
import Button from "@material-tailwind/react/Button";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Fashion from "./components/Productinfo/ecommerce/Fashion";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import ScrollToTop from "./components/ScrollTop/ScrollTop";
import Restaurant from "./components/Productinfo/ecommerce/Restaurant";
import Grocery from "./components/Productinfo/ecommerce/Grocery";
import Furniture from "./components/Productinfo/ecommerce/Furniture";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <ScrollToTop></ScrollToTop>
      <switch>
        <Route exact path="/" component={Home}></Route>

        <Route path="/fashion" component={Fashion}></Route>
        <Route path="/restaurant" component={Restaurant}></Route>
        <Route path="/grocery" component={Grocery}></Route>
        <Route path="/furniture" component={Furniture}></Route>
      </switch>
    </div>
  );
};

export default App;
