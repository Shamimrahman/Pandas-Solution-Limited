import React,{useState} from "react";
import Tech from "./Tech";
import data from "./data";
import Pagoination from "../pagination/Pagoination";
const TechInfo = () => {
  const [items, setItems] = useState(data);

  
  return (
    <div>
      <div data-aos="fade-up" className="text-center mt-20">
        <h1 className="sm:text-3xl text-4xl font-medium text-center title-font text-gray-900 mb-4">
          TECH STACK
        </h1>
        <hr className="w-52 mx-auto mt-5 headline"></hr>
      </div>

      <div className=" grid m-7  sm:grid-cols-5 justify-center mt-12 space-y-2 md:space-y-2">
      {items.map((val)=>{
        return(
          <Tech key={val.id} image={val.image} title={val.title}>
          
          </Tech>)
      })}
      </div>
    
    </div>
  );
};

export default TechInfo;