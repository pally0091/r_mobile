/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const PhoneDetail = () => {
  const data = useLoaderData();
  const detail = data.data;
  console.log(detail);
  return (
    <div>
      <h1>Details </h1>
    </div>
  );
};

export default PhoneDetail;
