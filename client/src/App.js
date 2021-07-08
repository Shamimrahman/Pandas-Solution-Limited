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
import Gadget from "./components/Productinfo/ecommerce/Gadget";
import Gadgetweb from "./components/Productinfo/ecommerce/ecommerceweb/Gadgetweb";

import Plant from "./components/Productinfo/ecommerce/Plant";
import Plantweb from "./components/Productinfo/ecommerce/ecommerceweb/Plantweb";
import RestaurantWeb from "./components/Productinfo/ecommerce/ecommerceweb/RestaurantWeb";
import Fashioncart from "./components/Productinfo/ecommerce/ecommerceweb/Fashioncart";
import Grocerycart from "./components/Productinfo/ecommerce/ecommerceweb/Grocerycart";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <ScrollToTop></ScrollToTop>
      <switch>
        <Route exact path="/" component={Home}></Route>

        <Route path="/fashion" component={Fashion}></Route>
        <Route path="/restaurant" component={Restaurant}></Route>
        <Route path="/restaurantcart" component={RestaurantWeb}></Route>
        <Route path="/grocery" component={Grocery}></Route>
        <Route path="/furniture" component={Furniture}></Route>
        <Route path="/gadget" component={Gadget}></Route>
        <Route path="/gadgetcart" component={Gadgetweb}></Route>
        <Route path="/plant" component={Plant}></Route>
        <Route path="/plantcart" component={Plantweb}></Route>
        <Route path="/fashioncart" component={Fashioncart}></Route>
        <Route path="/grocerycart" component={Grocerycart}></Route>
      </switch>
    </div>
  );
};

export default App;
