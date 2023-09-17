/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const PhonCard = ({ phone }) => {
  const { brand, phone_name, slug, image } = phone;
  return (
    <div className="h-64 rounded-xl relative  transition-all duration-500 overflow-hidden card">
      <img
        className="w-full h-full rounded-xl"
        src={image}
        alt={phone_name}
      />

      <div className="absolute bottom-full text-center w-full bg-black bg-opacity-60 card-info ">
        <p>{brand}</p>
        <p className="text-xl font-semibold">{phone_name}</p>
        <Link to={`/${slug}`}>
          <button className="bg-blue-300 text-black w-full py-2  hover:bg-blue-800 hover:text-white transition-all duration-500">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PhonCard;
