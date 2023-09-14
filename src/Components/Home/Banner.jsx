/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "./Slider";

const Banner = () => {
  return (
    <div className="w-[96%] mx-auto flex flex-row">
      <div className="w-full md:w-4/6 lg:w-w/6">
        <Slider></Slider>
      </div>
      <div className="w-2/6 hidden md:block lg:block">
        <div>
          <p>card1</p>
        </div>
        <div>
          <p>card2</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
