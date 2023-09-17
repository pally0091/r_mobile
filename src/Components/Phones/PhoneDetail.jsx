/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const PhoneDetail = () => {
  const data = useLoaderData();
  const detail = data.data;
  console.log(detail);
  return (
    <div className="w-[98%] md:w-[90%] lg:w-4/5 border border-white mx-auto my-5 p-5 bg-gray-700">
      <h1 className="bg-gray-200 text-black p-2 text-center text-3xl font-semibold">
        {detail.name}{" "}
      </h1>
      <div className="flex justify-evenly my-1 p-2">
        <h5 className="text-xl font-semibold">Realese: {detail.releaseDate}</h5>
        <h5 className="text-xl font-semibold">Brand: {detail.brand}</h5>
      </div>
      <div className="flex justify-center items-center flex-col md:flex-row lg:flex-row">
        <div className="w-[90%] md:w-[50%] lg:w-[40%] p-10">
          <img
            className="mx-auto"
            src={detail.image}
            alt=""
          />
        </div>
        <div className="w-[90%] md:w-[50%] lg:w-[40%] border p-5">
          <p>
            <span className="italic font-semibold">Processor</span>:{" "}
            {detail.mainFeatures.chipSet}{" "}
          </p>
          <p>
            <span className="italic font-semibold">Memory</span>:{" "}
            {detail.mainFeatures.memory}{" "}
          </p>
          <p>
            <span className="italic font-semibold">Display</span>:{" "}
            {detail.mainFeatures.displaySize}{" "}
          </p>
          <p>
            <span className="italic font-semibold">Ext storage</span>:{" "}
            {detail.mainFeatures.storage}{" "}
          </p>
        </div>
      </div>
      <div className="my-5 flex flex-col md:flex-row lg:flex-row justify-between items-start">
        <div className="w-[90%] md:w-[50%] lg:w-[50%]">
          <h4 className="italic font-semibold underline">Others</h4>
          <ul>
            <li>{detail.others.WLAN}</li>
            <li>Bluetooth: {detail.others.Bluetooth}</li>
            <li>NFC: {detail.others.NFC}</li>
            <li>GPS: {detail.others.GPS}</li>
            <li>Radio: {detail.others.Radio}</li>
            <li>USB: {detail.others.USB}</li>
          </ul>
        </div>
        <div className="w-[90%] md:w-[50%] lg:w-[50%]">
          <h4 className="italic font-semibold underline">Sensors</h4>
          <ul>
            <li>{detail.mainFeatures.sensors[0]}</li>
            <li>{detail.mainFeatures.sensors[1]}</li>
            <li>{detail.mainFeatures.sensors[2]}</li>
            <li>{detail.mainFeatures.sensors[3]}</li>
            <li>{detail.mainFeatures.sensors[4]}</li>
            <li>{detail.mainFeatures.sensors[5]}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetail;
