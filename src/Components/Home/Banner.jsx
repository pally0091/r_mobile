/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "./Slider";
import card2 from "../../assets/card 2.png";
import card1 from "../../assets/card 1.png";

const Banner = () => {
  return (
    <div className="w-[96%] mx-auto flex flex-row">
      <div className="w-full md:w-4/6 lg:w-w/6">
        <Slider></Slider>
      </div>
      <div className="w-2/6 hidden md:block lg:block">
        <div className="w-full">
          <img
            className="w-full"
            src={card1}
            alt=""
          />
        </div>
        <div className="w-full">
          <img
            className="w-full"
            src={card2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
