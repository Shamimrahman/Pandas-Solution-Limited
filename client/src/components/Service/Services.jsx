import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ServiceCard from "./ServiceCard";
import Tech from "../tech/Tech";
import "./Service.css";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="services">
      <div data-aos="fade-up" className="text-center mt-24 md:-mt-24 lg:mt-24">
        <h1 className="sm:text-3xl  text-4xl font-medium text-center title-font text-gray-900 mb-4">
          OUR SERVICES
        </h1>
        <hr className="w-52 mx-auto mt-5 headline"></hr>
      </div>

      <div class="max-w-screen-xl p-4 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20">
        <div class="relative">
          <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class="lg:col-start-2 lg:max-w-2xl ml-auto md:-mt-72  ">
              <h4 class="mt-4 lg:mt-2 md:mt-2  text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                Interactivity between team members is the key of the success.
              </h4>
              <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                Build a simply and powered collaborative space for all your
                team. Track, share, measure, you have a fully control, it&#x27;s
                never be simply and efficient.
              </p>
              <ul class="mt-8 md:grid md:grid-cols-2 gap-6">
                <li class="mt-6 lg:mt-0">
                  <div class="flex" data-aos="flip-down">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-500 text-white dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-900 dark:text-gray-200">
                      Web Apps Development
                    </span>
                  </div>
                </li>

                <li class="mt-6 lg:mt-0">
                  <div class="flex" data-aos="flip-down">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-500 text-white dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-900 dark:text-gray-200">
                      E-commerce Services
                    </span>
                  </div>
                </li>

                <li class="mt-6 lg:mt-0">
                  <div class="flex" data-aos="flip-down">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-500 text-white dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-900 dark:text-gray-200">
                      ERP Services
                    </span>
                  </div>
                </li>

                <li class="mt-6 lg:mt-0">
                  <div class="flex" data-aos="flip-down">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-500 text-white dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-900 dark:text-gray-200">
                      Mobile Apps Development
                    </span>
                  </div>
                </li>
                <li class="mt-6 lg:mt-0">
                  <div class="flex" data-aos="flip-down">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-500 text-white dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-900 dark:text-gray-200">
                      Software Development
                    </span>
                  </div>
                </li>

                <li class="mt-6 lg:mt-0">
                  <div class="flex" data-aos="flip-down">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-500 text-white dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-900 dark:text-gray-200">
                      UI/UX Design
                    </span>
                  </div>
                </li>

                <li class="mt-6 lg:mt-0">
                  <div class="flex" data-aos="flip-down">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-500 text-white dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-900 dark:text-gray-200">
                      Live modifications
                    </span>
                  </div>
                </li>

                <li class="mt-6 lg:mt-0">
                  <div class="flex" data-aos="flip-down">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-500 text-white dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-900 dark:text-gray-200">
                      IT Counsulting
                    </span>
                  </div>
                </li>

                <li class="mt-6 lg:mt-0">
                  <div class="flex" data-aos="flip-down">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-500 text-white dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-900 dark:text-gray-200">
                      QA & Testing
                    </span>
                  </div>
                </li>

                <li class="mt-6 lg:mt-0">
                  <div class="flex" data-aos="flip-down">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-500 text-white dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-900 dark:text-gray-200">
                      Data Tracker
                    </span>
                  </div>
                </li>

                <li class="mt-6 lg:mt-0">
                  <div class="flex" data-aos="flip-down">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-500 text-white dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-900 dark:text-gray-200">
                      24/7 support
                    </span>
                  </div>
                </li>

                <li class="mt-6 lg:mt-0">
                  <div class="flex" data-aos="flip-down">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-500 text-white dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-900 dark:text-gray-200">
                      Free tips to improve work time
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div class="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
              <div class="relative space-y-4">
                <div
                  class="flex -mt-2 lg:-mt-32 items-end justify-center lg:justify-start space-x-4"
                  data-aos="zoom-in"
                >
                  <img
                    class="rounded-lg shadow-lg w-36 md:w-72 "
                    width="200"
                    src="./img/appshop.png"
                    alt="1"
                  />
                  <img
                    class="rounded-lg shadow-lg w-52 md:w-80"
                    width="260"
                    src="./img/graph.gif"
                    alt="2"
                  />
                </div>
                <div
                  class="flex items-start justify-center lg:justify-start space-x-4 ml-12"
                  data-aos="zoom-in-up"
                >
                  <img
                    class="rounded-lg shadow-lg  w-36 md:w-72"
                    width="170"
                    src="./img/appfood.png"
                    alt="3"
                  />
                  <img
                    class="rounded-lg shadow-lg w-48 object-contain md:w-72 lg:w-72"
                    width="200"
                    src="./img/fashion.gif"
                    alt="4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in ">
        <img
          class=" simg w-15"
          alt="process"
          src="https://images.squarespace-cdn.com/content/v1/5d48ece5c9b54700015ba784/1603676341616-8KFT7L4Y1KVA867JW5OK/Boston+Grocery+Delivery+App+UI+Kit-web-15.gif"
        />
      </div>
    </div>
  );
};

export default Services;
