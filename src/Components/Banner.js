import React from "react";
import BannerImg from "../assets/Rectangle.png";

function Banner() {
  return (
    <>
      <div>
        <div className="relative bg-[#bd1e59] text-white p-8 flex flex-col items-center justify-center max-w-full h-[500px] sm:h-[600px] lg:h-[700px]">
          <img
            src={BannerImg}
            alt=""
            className="absolute inset-0 z-0 object-cover w-full h-full"
          />
          <div className="relative z-10 max-w-3xl p-2 mx-auto text-center mt-">
            <h1 className="mb-5 text-4xl font-bold leading-normal md:text-5xl">
              Big Heading  Text
            </h1>
            <h2 className="mb-2 text-xl md:text-2xl md:mt-4">
              Subheading text
              <br className="block md:hidden" />
              line goes here.
            </h2>
            <p className="p-4 mb-4 text-base font-medium md:mt-6 md:text-lg">
              Small descriptive text in {""}
              <br className="block lg:hidden" />
              3-4 lines can go here.
              <br className="md:hidden lg:block" />
              They can be a single line or {""}
              <br className="block lg:hidden" />
              short paragraph too.
            </p>

            <button className="px-[2.10rem] py-2 mt-6 font-semibold  text-black transition-transform duration-200 bg-yellow-400 rounded-md hover:bg-black hover:text-white">
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
