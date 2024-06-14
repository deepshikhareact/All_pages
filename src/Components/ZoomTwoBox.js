import React from "react";
import Image from "../assets/samm.jpg";

function ZoomTwoBox() {
  return (
 
    <>

<div className="flex items-center justify-center p-4 mx-auto md:p-6 lg:p-8">
      <div className="grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
        {/* Card 1 */}
        <div className="flex flex-col w-full h-auto md:h-[750px] bg-white text-[#0a0a0a] shadow-lg rounded-lg">
          <figure className="flex justify-center items-center overflow-hidden rounded-t-lg h-64 md:h-[85%]">
            <img
              src={Image}
              alt="Card Preview"
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </figure>
          <div className="flex flex-col p-6 h-auto md:h-[40%]">
            <div className="text-lg font-semibold">
              Name of the work or project
              <br />
              goes here in 2 lines
              <div className="w-2/3 my-4 border-t-4 border-purple-500 rounded" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col w-full h-auto md:h-[750px] bg-white text-[#0a0a0a] shadow-lg rounded-lg">
          <figure className="flex justify-center items-center overflow-hidden rounded-t-lg h-64 md:h-[85%]">
            <img
              src={Image}
              alt="Card Preview"
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </figure>
          <div className="flex flex-col p-6 h-auto md:h-[40%]">
            <div className="text-lg font-semibold">
              Name of the work or project
              <br />
              goes here in 2 lines
              <div className="w-2/3 my-4 border-t-4 border-purple-500 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* <div class="flex mx-auto justify-center items-center">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:m-6">
          <div class="flex flex-col  w-full xl:w-96 h-[750px] bg-[#ffffff] text-[#0a0a0a] ">
            <figure class="flex justify-center items-center overflow-hidden">
              <img
                src={Image}
                alt="Card Preview"
                className="w-[438px] h-[599px] transition-transform duration-300 ease-in-out hover:scale-110 transform n"
              />
            </figure>
            <div class="flex flex-col p- h-">
              <div class="  text-lg font-semibold">
                Name of the work or project
                <br />
                goes here in 2 lines
                <div className="w-2/3 my-6 border-t-4 border-purple-500 rounded" />
              </div>
            </div>
          </div>
          <div class="flex flex-col  w-full xl:w-96 h-[750px] bg-[#ffffff] text-[#0a0a0a] ">
            <figure class="flex justify-center items-center overflow-hidden">
              <img
                src={Image}
                alt="Card Preview"
                className="w-[438px] h-[599px] transition-transform duration-300 ease-in-out hover:scale-110 transform n"
              />
            </figure>
            <div class="flex flex-col p- h-">
              <div class="  text-lg font-semibold">
                Name of the work or project
                <br />
                goes here in 2 lines
                <div className="w-2/3 my-6 border-t-4 border-purple-500 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default ZoomTwoBox;
