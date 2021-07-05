import React from "react";
import "./Fashion.css";
import Message from "../MessageForm/Message";
import Motive from "../../motive/Motive";
const Fashion = () => {
  return (
    <div>
      <div className="text-blueGray-700 ">
        <div className="container flex flex-col px-5 py-24 mx-auto lg:items-center">
          <div className="flex flex-col w-full mb-12 text-left lg:text-center">
            <h2 className="mb-4 text-4xl font-semibold tracking-widest text-black uppercase title-font text-center">
              FASHION ECOMMERCE SITE
            </h2>
            <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-5xl title-font text-center">
              Grow Your Bussiness with Pandas
            </h1>
            <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-2/3">
              Our experts developers have been developing amazing fashion
              e-commerce website along with app (Android and iOS). We provide
              online cloth ordering solutions that help online shopping
              businesses take full advantage of automation and be efficient in
              their day-to-day activities.
            </p>
          </div>
          <div className="flex justify-left justify-center space-x-6 ">
           <a href='#message'>
           <button
           className=" btn  hover:bg-red-500  transition duration-500 ease-in-out transform bg-red-500 border-red-500 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2"
           
         >
           For Demo
         </button>
           
           </a>

        <button
          className=" btn  hover:bg-red-500  transition duration-500 ease-in-out transform bg-red-500 border-red-500 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2"
          
        >
          App
        </button>
          </div>
        </div>
      </div>
      <section>
        <div className="container flex flex-col items-center justify-center px-10 mx-auto rounded-lg lg:-mt-12 lg:px-40 ">
          <img
            className="object-cover object-center w-full shadow-xl rounded-xl sm:mt-5  "
            alt="fashion"
            src="./info/fashioninfo.jpg"
          />
        </div>
      </section>

      {/**Feature Section */}

      <div class="text-blueGray-700 mt-20 bg-gray-50 ">
        <div class="container flex flex-col items-start px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
          <div class="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2 -mt-32">
            <img
              class="object-cover object-center rounded "
              alt="hero"
              loading="lazy"
              src="./info/fashion2.jpg"
            />
          </div>
          <div class="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
            <h1 class="mb-8 ml-3 space-y-4 text-4xl font-bold tracking-tighter text-center hover:text-red-500 title-font">
              FEATURES
            </h1>
            <p class="flex mb-2 text-blueGray-600 hover:text-red-500">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              Content management capabilities.
            </p>

            <br></br>
            <p class="flex mb-2 text-blueGray-600 hover:text-red-500">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              Promotion and discount code tools.
            </p>
            <br></br>
            <p class="flex mb-6 text-blueGray-600 hover:text-red-500">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              An easy-to-use checkout.
            </p>

            <p class="flex mb-6 text-blueGray-600 hover:text-red-500">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              Search engine optimized code and layout.
            </p>

            <p class="flex mb-6 text-blueGray-600 hover:text-red-500">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              Reporting tools and custom report features.
            </p>
            <p class="flex mb-6 text-blueGray-600 hover:text-red-500">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              Email marketing features or integration.
            </p>

            <p class="flex mb-6 text-blueGray-600 hover:text-red-500">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              Multiple payment options.
            </p>

            <p class="flex mb-6 text-blueGray-600 hover:text-red-500">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              The ability to scale and add new features.
            </p>
            <div class="flex flex-wrap w-full mt-2 -mx-4 text-center ">
              <div class="w-1/4 p-4 mt-4 md:w-1/4">
                <img
                  className="w-28 h-28 contain img-logo"
                  src="./tech/react.png"
                ></img>
              </div>
              <div class="w-1/4 p-4 mt-4 md:w-1/4">
                <img
                  className="w-28 h-28 contain img-logo"
                  src="./tech/nextjs.png"
                ></img>
              </div>
              <div class="w-1/4 p-4 mt-4 md:w-1/4">
                <img
                  className="w-28 h-28 contain img-logo"
                  src="./tech/nodejs.png"
                ></img>
              </div>
              <div class="w-1/4 p-4 mt-4 md:w-1/4">
                <img
                  className="w-28 h-28 contain img-logo"
                  src="./tech/mongodb.png"
                ></img>
              </div>

              <div class="w-1/4 p-4 md:w-1/4 -mt-8 md:-mt-2">
                <img
                  className="w-28 h-28 contain img-logo"
                  src="./info/laravel.png"
                ></img>
              </div>

              <div class="w-1/4 p-4 md:w-1/4 -mt-8 md:-mt-2">
                <img
                  className="w-28 h-28 contain img-logo"
                  src="./tech/mysql.png"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**Message Form */}
     
        <Message></Message>
        <Motive></Motive>
      
    </div>
  );
};

export default Fashion;
