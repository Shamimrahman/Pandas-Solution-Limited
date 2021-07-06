import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Furniture = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div class="container px-6 py-16 mx-auto">
      <div class="items-center lg:flex">
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg" data-aos="fade-left">
            <h1 class="xs:text-4xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">
              <span class="text-blue-800"> Furniture ordering website</span>
            </h1>
            <p class="mt-2 text-gray-600 dark:text-gray-400">
              Our experts developers have been developing amazing furniture
              delivery website along with app (Android and iOS). We provide
              online furnitures ordering solutions that help online furniture
              shopping businesses take full advantage of automation and be
              efficient in their day-to-day activities.
            </p>
            <div class="flex justify-center space-x-7 mt-10">
              <a href="#message">
                <button className=" btn  hover:bg-red-500  transition duration-500 ease-in-out transform bg-red-500 border-red-500 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2">
                  For Demo
                </button>
              </a>

              <button className=" btn  hover:bg-red-500  transition duration-500 ease-in-out transform bg-red-500 border-red-500 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2">
                App
              </button>
            </div>
          </div>
        </div>

        <div
          class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
          data-aos="fade-right"
        >
          <img
            class="w-full h-full lg:max-w-2xl"
            src="/info/furniture.svg"
            alt="Catalogue-pana.svg"
          />
        </div>
      </div>

      <div class="text-blueGray-700 mt-2 bg-gray-50 shadow-xl ">
        <div class="container flex flex-col items-start px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
          <div
            class="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/3 lg-mt-72"
            data-aos="zoom-out-down"
          >
            <img
              class="object-cover object-center rounded shadow-lg lg:-mt-28 "
              alt="hero"
              src="https://www.wofox.com/napi/adsn/MTY2NjU=/166651574058317971.gif?20191223083542"
            />
          </div>
          <div class=" flex flex-col items-start text-left lg:flex-grow md:w-1/3 lg:pl-24 md:pl-16 xs:ml-2 md:ml-28 ">
            <section class=" text-blueGray-700 ">
              <div class="container items-center px-5 py-12 lg:px-20">
                <div class="flex flex-wrap items-center justify-center w-full gap-4">
                  <div class="w-full xl:w-1/4 md:w-3/6">
                    <div
                      class="relative flex flex-col h-full p-8 transition duration-500 ease-in-out transform bg-blue-500 border rounded-lg shadow-2xl"
                      data-aos="flip-right"
                    >
                      <h2 class="mb-4 text-2xl font-medium tracking-widest text-black uppercase title-font">
                        Features
                      </h2>
                      <p class="flex items-center mb-8 text-base font-medium leading-relaxed text-blueGray-700">
                        {" "}
                        All the basics for starting a new biz..{" "}
                      </p>
                      <strong class="flex items-end xs:text-2xl  font-black leading-none text-black md:text-2xl ">
                        <span>From $358 / 30,000৳ - </span>
                      </strong>
                      <p class="flex items-center mt-8 mb-2 text-base font-medium leading-relaxed text-blueGray-700">
                        <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-black">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.5"
                            class="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Furniture Ordering.
                      </p>

                      <p class="flex items-center mb-2 text-base font-medium leading-relaxed text-blueGray-700">
                        <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-black">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.5"
                            class="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Augmented Reality.
                      </p>

                      <p class="flex items-center mb-2 text-base font-medium leading-relaxed text-blueGray-700">
                        <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-black">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.5"
                            class="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Order Tracking.
                      </p>

                      <p class="flex items-center mb-2 text-base font-medium leading-relaxed text-blueGray-700">
                        <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-black">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.5"
                            class="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Automated Marketing.
                      </p>

                      <p class="flex items-center mb-2 text-base font-medium leading-relaxed text-blueGray-700">
                        <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-black">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.5"
                            class="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Social Monitoring.
                      </p>

                      <p class="flex items-center mb-2 text-base font-medium leading-relaxed text-blueGray-700">
                        <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-black">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.5"
                            class="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Social Media Integration.
                      </p>

                      <p class="flex items-center mb-2 text-base font-medium leading-relaxed text-blueGray-700">
                        <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-black">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.5"
                            class="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Free Maintenance Cost
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div class="flex flex-wrap w-full mt-2 -mx-4 text-center ">
              <div class="w-1/4 p-4 mt-4 md:w-1/4" data-aos="flip-left">
                <img
                  className="w-28 h-28 contain img-logo"
                  src="./tech/react.png"
                ></img>
              </div>
              <div class="w-1/4 p-4 mt-4 md:w-1/4" data-aos="flip-left">
                <img
                  className="w-28 h-28 contain img-logo"
                  src="./tech/nextjs.png"
                ></img>
              </div>
              <div class="w-1/4 p-4 mt-4 md:w-1/4" data-aos="flip-left">
                <img
                  className="w-28 h-28 contain img-logo"
                  src="./tech/nodejs.png"
                ></img>
              </div>
              <div class="w-1/4 p-4 mt-4 md:w-1/4" data-aos="flip-left">
                <img
                  className="w-28 h-28 contain img-logo"
                  src="./tech/mongodb.png"
                ></img>
              </div>

              <div
                class="w-1/4 p-4 md:w-1/4 -mt-8 md:-mt-2"
                data-aos="flip-left"
              >
                <img
                  className="w-28 h-28 contain img-logo"
                  src="./info/laravel.png"
                ></img>
              </div>

              <div
                class="w-1/4 p-4 md:w-1/4 -mt-8 md:-mt-2"
                data-aos="flip-left"
              >
                <img
                  className="w-28 h-28 contain img-logo"
                  src="./tech/mysql.png"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Furniture;
