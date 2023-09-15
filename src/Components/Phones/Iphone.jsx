/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const Iphone = () => {
  const data = useLoaderData();
  const iphones = data.data;
  console.log(iphones);
  return (
    <div className="text-center">
      <p className="my-5 font-bold italic">
        There are {iphones.length} of Iphones
      </p>
    </div>
  );
};

export default Iphone;
