/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Slider.css";

const Slider = () => {
  const slides = [
    {
      title: "Discover the Latest Mobile Devices",
      content: "Explore our wide range of mobile phones from top brands.",
    },
    {
      title: "Great Deals and Discounts",
      content:
        "Get amazing prices and exclusive discounts on your favorite devices.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [slides]);

  return (
    <div>
      <div className="welcome-message">
        <h1 className="text-4xl my-4">Welcome to our Mobile Shop</h1>
        <p className="my-2 text-lg">
          Discover the best mobile devices and accessories.
        </p>
      </div>
      {/* slider  */}
      <div
        id="slider"
        className="simple-carousel h-72 md:h-60 lg:h-96 mt-10"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <h2>{slide.title}</h2>
            <p>{slide.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
