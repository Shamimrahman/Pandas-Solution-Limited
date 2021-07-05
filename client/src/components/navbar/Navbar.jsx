import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-lg">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
         <Link to='/'> <img src="./img/pandasfinal.png" className="img w-full"></img></Link>
        </a>
        <nav class="md:ml-10 ml-5 md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 text-black hover:text-red-500">Home</a>
          <a class="mr-5 text-black hover:text-red-500 " href='#products'>Products</a>
          <a class="mr-5 text-black hover:text-red-500">Technologies</a>
          <a class="mr-5 text-black hover:text-red-500">Career</a>
          <a class="mr-5 text-black hover:text-red-500">Contact</a>
        </nav>
        <button class="inline-flex items-center bg-red-400 border-0 py-1 px-3 focus:outline-none  rounded text-white mt-4 md:mt-0">
          Request an Estimate
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
