/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const Samsung = () => {
  const data = useLoaderData();
  const sams = data.data;
  console.log(sams);
  return (
    <div className="text-center">
      <p className="my-5 font-bold italic">
        There are {sams.length} of Samsung Galaxy phones
      </p>
    </div>
  );
};

export default Samsung;
