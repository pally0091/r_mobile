/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/4">
          <h3 className="text-lg font-semibold">R Mobile Shop</h3>
          <p className="mt-2">
            Your pocket's best friend for all things mobile.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <h3 className="text-lg font-semibold">Subscribe to Our Newsletter</h3>
          <form className="mt-2">
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-l-md py-2 px-3 w-full"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-r-md py-2 px-4"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center mt-4">
        &copy; {new Date().getFullYear()} R Mobile Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
