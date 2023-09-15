/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row lg:flex-row justify-between items-end">
      <div className="mt-4">
        <Link to="/">
          <button className="bg-white text-green-950 px-3  py-1 mx-2 w-20 rounded-lg hover:bg-green-950 hover:text-white font-semibold transition-all duration-500">
            Home
          </button>
        </Link>
        <Link to="/phones">
          <button className="bg-white text-green-950 px-3 py-1 mx-2 w-20 rounded-lg  hover:bg-green-950 hover:text-white font-semibold transition-all duration-500">
            Phones
          </button>
        </Link>
      </div>
      <div>
        <h1 className="text-5xl font-bold">R Mobile Shop</h1>
      </div>
    </div>
  );
};

export default Navbar;
