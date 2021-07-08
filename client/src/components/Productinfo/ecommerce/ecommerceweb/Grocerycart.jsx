import React, { useEffect } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

const Grocerycart = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div class=" mt-5">
      <div data-aos="fade-up" className="text-center mt-10">
        <h1 className="sm:text-3xl text-4xl font-medium text-center title-font text-gray-900 mb-4">
          Product Demo Cart Page
        </h1>
        <hr className="w-52 mx-auto mt-5 headline"></hr>
        <div class="flex justify-center space-x-7 mt-10">
          <Link to="/grocery">
            {" "}
            <button className=" btn  hover:bg-red-500  transition duration-500 ease-in-out transform bg-red-500 border-red-500 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2">
              Back
            </button>
          </Link>
        </div>
      </div>
      <div class="py-12">
        <div class="md:flex ">
          <div class="w-full p-4 px-5 py-5" data-aos="flip-down">
            <div class="md:grid md:grid-cols-3 gap-2 " data-aos="flip-down">
              <div
                class="col-span-2 p-5 shadow-2xl bg-green-50"
                data-aos="flip-down"
              >
                <h1 class="text-xl font-medium ">Shopping Cart</h1>
                <div class="flex justify-between items-center mt-6 pt-6">
                  <div class="flex items-center">
                    <img
                      src="https://www.jiomart.com/images/product/420x420/490503478/nescafe-classic-instant-coffee-100-g-jar-5-20200723.jpg"
                      width="60"
                      class="rounded-full "
                    />
                    <div class="flex flex-col ml-3">
                      {" "}
                      <span class="md:text-md font-medium">
                        Nescafe Coffee
                      </span>{" "}
                      <span class="text-xs font-light text-gray-400">
                        #41551
                      </span>{" "}
                    </div>
                  </div>
                  <div class="flex justify-center items-center">
                    <div class="pr-8 flex ">
                      {" "}
                      <span class="font-semibold">-</span>{" "}
                      <input
                        type="text"
                        class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                        value="1"
                      />
                      <span class="font-semibold">+</span>
                    </div>
                    <div class="pr-8 ">
                      {" "}
                      <span class="text-xs font-medium">$10.50</span>{" "}
                    </div>
                    <div>
                      {" "}
                      <i class="fa fa-close text-xs font-medium"></i>{" "}
                    </div>
                  </div>
                </div>
                <div class="flex justify-between items-center pt-6 mt-6 border-t">
                  <div class="flex items-center">
                    <img
                      src="https://thewoksoflife.com/wp-content/uploads/2016/03/chiu-chow-7-500x500.jpg"
                      width="60"
                      class="rounded-full "
                    />

                    <div class="flex flex-col ml-3 ">
                      {" "}
                      <span class="text-md font-medium w-auto">
                        Chili Sauce
                      </span>{" "}
                      <span class="text-xs font-light text-gray-400">
                        #66999
                      </span>{" "}
                    </div>
                  </div>
                  <div class="flex justify-center items-center">
                    <div class="pr-8 flex">
                      {" "}
                      <span class="font-semibold">-</span>{" "}
                      <input
                        type="text"
                        class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                        value="1"
                      />{" "}
                      <span class="font-semibold">+</span>
                    </div>
                    <div class="pr-8">
                      {" "}
                      <span class="text-xs font-medium">$10.50</span>{" "}
                    </div>
                    <div>
                      {" "}
                      <i class="fa fa-close text-xs font-medium"></i>{" "}
                    </div>
                  </div>
                </div>

                <div class="flex justify-between items-center mt-6 pt-6 border-t">
                  <div class="flex items-center">
                    {" "}
                    <i class="fa fa-arrow-left text-sm pr-2"></i>{" "}
                    <span class="text-md font-medium text-green-500">
                      Continue Shopping
                    </span>{" "}
                  </div>
                  <div class="flex justify-center items-end">
                    {" "}
                    <span class="text-sm font-medium text-gray-400 mr-1">
                      Subtotal:
                    </span>{" "}
                    <span class="text-lg font-bold text-gray-800 ">
                      {" "}
                      $20.90
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div class=" p-5 bg-green-700 rounded  overflow-visible shadow-2xl">
                {" "}
                <span class="text-xl font-medium text-gray-100 block pb-3">
                  Card Details
                </span>{" "}
                <span class="text-xs text-gray-400 ">Card Type</span>
                <div class="overflow-visible flex justify-between items-center mt-2">
                  <div class="rounded w-52 h-28 bg-gray-500 py-2 px-4 relative right-10">
                    {" "}
                    <span class="italic text-lg font-medium text-gray-200 underline">
                      VISA
                    </span>
                    <div class="flex justify-between items-center pt-4 ">
                      {" "}
                      <span class="text-xs text-gray-200 font-medium">
                        ****
                      </span>{" "}
                      <span class="text-xs text-gray-200 font-medium">
                        ****
                      </span>{" "}
                      <span class="text-xs text-gray-200 font-medium">
                        ****
                      </span>{" "}
                      <span class="text-xs text-gray-200 font-medium">
                        ****
                      </span>{" "}
                    </div>
                    <div class="flex justify-between items-center mt-3">
                      {" "}
                      <span class="text-xs text-gray-200">
                        Pandas Solution Ltd.
                      </span>{" "}
                      <span class="text-xs text-gray-200">7/21</span>{" "}
                    </div>
                  </div>
                  <div class="flex justify-center items-center flex-col">
                    {" "}
                    <img
                      src="https://img.icons8.com/color/96/000000/mastercard-logo.png"
                      width="40"
                      class="relative right-5 shadow-2xl"
                    />{" "}
                    <span class="text-xs font-medium text-gray-200 bottom-2 relative right-5">
                      mastercard.
                    </span>{" "}
                  </div>
                </div>
                <div class="flex justify-center flex-col pt-3">
                  {" "}
                  <label class="text-xs text-gray-400 ">
                    Name on Card
                  </label>{" "}
                  <input
                    type="text"
                    class="focus:outline-none w-full h-6 bg-green-700 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                    placeholder="Pandas Solution"
                  />{" "}
                </div>
                <div class="flex justify-center flex-col pt-3">
                  {" "}
                  <label class="text-xs text-gray-400 ">Card Number</label>{" "}
                  <input
                    type="text"
                    class="focus:outline-none w-full h-6 bg-green-700 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                    placeholder="**** **** **** ****"
                  />{" "}
                </div>
                <div class="grid grid-cols-3 gap-2 pt-2 mb-3">
                  <div class="col-span-2 ">
                    {" "}
                    <label class="text-xs text-gray-400">Expiration Date</label>
                    <div class="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        class="focus:outline-none w-full h-6 bg-green-700 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                        placeholder="mm"
                      />
                      <input
                        type="text"
                        class="focus:outline-none w-full h-6 bg-green-700 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                        placeholder="yyyy"
                      />
                    </div>
                  </div>
                  <div class="">
                    {" "}
                    <label class="text-xs text-gray-400">CVV</label>{" "}
                    <input
                      type="text"
                      class="focus:outline-none w-full h-6 bg-green-700 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                      placeholder="XXX"
                    />{" "}
                  </div>
                </div>{" "}
                <button class="h-12 w-full bg-green-500 rounded focus:outline-none text-white hover:bg-green-700">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grocerycart;
