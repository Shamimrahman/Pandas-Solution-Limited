import React from "react";
import "@material-tailwind/react/tailwind.css";
import Button from "@material-tailwind/react/Button";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Fashion from './components/Productinfo/ecommerce/Fashion'
import Navbar from './components/navbar/Navbar'
import Home from "./components/Home/Home";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <switch>

      <Route exact path="/fashion" component={Fashion}></Route>
      <Route  exact path ='/' component={Home}></Route>
      
      </switch>
    </div>
  );
};

export default App;
