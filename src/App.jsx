import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div
        className=" absolute h-screen w-full bg-no-repeat  bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2017/07/13/08/59/greenhouse-2499758_1280.jpg')",
          filter: "brightness(50%)",
        }}
      ></div>
      <div className="  h-screen container backdrop-blur-[4px] grid grid-cols-3 items-center gap-4 ">
        <div className="   col-span-1 z-40 flex flex-col justify-center items-center text-white ">
          <h1 className=" text-4xl px-18 leading-tight text-white text-center font-serif font-bold">
            Welcome To Paradise Nursery
          </h1>
          <div className=" border-t-2 border-green-400 w-10 my-6  mx-auto"></div>
          <p className=" text-white text-center text-xl font-serif font-medium ">
            Where Green Meets Serenity
          </p>

          <Link
            to="/ProductList"
            className=" py-3 px-8 mt-4 rounded-lg bg-green-400 text-white text-xl"
          >
            Get Started
          </Link>
        </div>
        <div className=" col-span-2 font-serif  text-white px-20 gap-4 flex flex-col">
          {/* <h1 className="about-us-heading">About Us</h1> */}
          <p className=" text-center font-bold text-xl">
            Welcome to Paradise Nursery, where green meets serenity!
          </p>
          <p className=" text-xl  text-justify">
            At Paradise Nursery, we are passionate about bringing nature closer
            to you. Our mission is to provide a wide range of high-quality
            plants that not only enhance the beauty of your surroundings but
            also contribute to a healthier and more sustainable lifestyle. From
            air-purifying plants to aromatic fragrant ones, we have something
            for every plant enthusiast.
          </p>
          {/* <p className="plant_logo_left"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
          <p className=" text-xl  text-justify">
            Our team of experts is dedicated to ensuring that each plant meets
            our strict standards of quality and care. Whether you're a seasoned
            gardener or just starting your green journey, we're here to support
            you every step of the way. Feel free to explore our collection, ask
            questions, and let us help you find the perfect plant for your home
            or office.
          </p>
          {/* <p className="plant_logo_right"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}

          <p className=" text-xl  text-justify">
            Join us in our mission to create a greener, healthier world. Visit
            Paradise Nursery today and experience the beauty of nature right at
            your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
