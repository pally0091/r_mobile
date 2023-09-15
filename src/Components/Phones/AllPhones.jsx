/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AllPhones = () => {
  return (
    <div>
      <nav className="flex flex-row justify-center">
        <NavLink
          className="bg-white text-black mx-2 px-2 py-1 w-24 text-center tex-lg font-semibold rounded-b-lg transition-all duration-500"
          to="/phones/iphone"
        >
          Iphone
        </NavLink>
        <NavLink
          className="bg-white text-black mx-2 px-2 py-1 w-24 text-center tex-lg font-semibold rounded-b-lg transition-all duration-500"
          to="/phones/samsung"
        >
          Samsung
        </NavLink>
        <NavLink
          className="bg-white text-black mx-2 px-2 py-1 w-24 text-center tex-lg font-semibold rounded-b-lg transition-all duration-500"
          to="/phones/oppo"
        >
          Oppo
        </NavLink>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default AllPhones;
<p>all phones</p>;
