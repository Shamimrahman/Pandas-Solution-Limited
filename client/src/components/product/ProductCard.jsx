import React, { useEffect } from "react";
import "./ProductCard.css";
import Aos from "aos";
import "aos/dist/aos.css";
import {Link} from "react-router-dom";
import { useHistory } from "react-router";
const ProductCard = ({ image, name, description, price,plink}) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const history=useHistory();

  
  return (
    <div>
      <section className="text-blueGray-700  hover:bg-orange-100">
        <div
          className="container items-center px-5 py-12 lg:px-16 Card"
          data-aos="flip-right"
        >
          <div className="w-auto xl:w-1/4 md:w-1/3 ">
            <div className="relative flex flex-col h-full transition duration-500 ease-in-out transform bg-white card hover:text-red-500 hover:bg-gray-100 rounded-lg shadow-xl ">
              <img
                className="object-cover card-img object-center w-full lg:h-52 md:h-36 shadow-xl"
                src={image}
                alt="product"
              />
              <div className="p-6">
                <h2 className="mb-4 text-sm font-medium tracking-widest text-blueGray-700 uppercase title-font ">
                  {name}
                </h2>
                <strong className="flex items-end mb-8 text-xl font-black leading-none text-black lg:text-4xl ">
                  From &nbsp; {price}
                </strong>
                <p className="flex items-center mb-4 text-base font-medium leading-relaxed text-gray-800 lg:h-24 md:h-18">
                  {description}
                </p>
                <div>
                <Link to={plink}>  <button

               
                role="button"
                className="w-full shadow-2xl px-4 py-2 mx-auto mt-6 text-base font-medium text-white transition duration-500 ease-in-out transform bg-red-500 border-red-500 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2 hover:bg-red-600  button"
              >
                Request For Demo
              </button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
