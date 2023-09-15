/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const Oppo = () => {
  const data = useLoaderData();
  const oppos = data.data;
  console.log(oppos);
  return (
    <div className="text-center">
      <p className="my-5 font-bold italic">
        There are {oppos.length} of Oppo Phones
      </p>
    </div>
  );
};

export default Oppo;
