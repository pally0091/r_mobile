/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import PhoneCard from "./PhonCard";

const Iphone = () => {
  const data = useLoaderData();
  const iphones = data.data;
  console.log(iphones);
  return (
    <div className="text-center">
      <p className="my-5 font-bold italic">
        There are {iphones.length} of Iphones
      </p>
      <div className="w-[90%] mx-auto mt-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {iphones.map((phone) => (
          <PhoneCard
            key={phone.phone_name}
            phone={phone}
          ></PhoneCard>
        ))}
      </div>
    </div>
  );
};

export default Iphone;
