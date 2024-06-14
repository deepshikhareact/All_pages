// import React from "react";
// import rectangles from "../assets/bgimg.jpg";

// const Four = () => {
//   return (
//     <>
//       <div className="flex flex-row overflow-y-auto h-[200px] sm:h-[280px] md:h-[380px] md:gap-2 xl:h-[450px] w-full pt-4 mx-auto">
//         <div
//           className="relative flex-none w-full text-white transition-all duration-300 md:w-1/2 md:h-auto group"
//           style={{
//             backgroundImage: `url(${rectangles})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           <h1 className="z-10 flex items-center justify-center h-full text-2xl font-bold md:text-4xl group-hover:hidden">
//             Featured <br className="block lg:hidden " />
//             Services 01
//           </h1>
//           <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 bg-[#9727ff] bg-opacity-0 group-hover:bg-opacity-100">
//             <h2 className="text-lg font-bold text-center transition-opacity duration-100 opacity-0 md:text-3xl group-hover:opacity-100">
//               FEATURED SERVICE 01
//             </h2>
//             <div className="flex flex-col items-center justify-center">
//               <p className="mt-2 text-sm transition-opacity duration-300 opacity-0 md:mt-4 md:text-base md:text-left group-hover:opacity-100">
//                 Description and details of this service go here in a short
//                 paragraph.
//               </p>
//               <ul className="mt-2 text-sm transition-opacity duration-300 opacity-0 md:mt-3 md:text-base md:text-left group-hover:opacity-100">
//                 <li>Like this</li>
//                 <li>Like this</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div
//           className="relative flex-none w-full text-white transition-all duration-300 md:w-1/2 md:h-auto group"
//           style={{
//             backgroundImage: `url(${rectangles})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           <h1 className="z-10 flex items-center justify-center h-full text-2xl font-bold md:text-4xl group-hover:hidden">
//             Featured <br className="block lg:hidden " />
//             Services 02
//           </h1>
//           <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 bg-[#9727ff] bg-opacity-0 group-hover:bg-opacity-100">
//             <h2 className="text-lg font-bold text-center transition-opacity duration-100 opacity-0 md:text-3xl group-hover:opacity-100">
//               FEATURED SERVICE 02
//             </h2>
//             <div className="flex flex-col items-center justify-center">
//               <p className="mt-2 text-sm transition-opacity duration-300 opacity-0 md:mt-4 md:text-base md:text-left group-hover:opacity-100">
//                 Description and details of this service go here in a short
//                 paragraph.
//               </p>
//               <ul className="mt-2 text-sm transition-opacity duration-300 opacity-0 md:mt-3 md:text-base md:text-left group-hover:opacity-100">
//                 <li>Like this</li>
//                 <li>Like this</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <div>
//         <div className="flex overflow-y-auto gap-8 md:overflow-hidden flex-row  h-[450px] p-2">
//           <div
//             className="flex flex-col items-start justify-between p-6 space-y-4 bg-center bg-cover rounded-lg"
//             style={{
//               backgroundImage: `url(${Image})`,
//               width: "350px",
//               height: "378px",
//             }}
//           >
//             <span className="text-sm uppercase text-[#d1d5db]">Category</span>
//             <h2 className="text-2xl font-bold leading-tight text-white">
//               Introduction line heading or value proposition goes here in 4
//               lines.
//             </h2>
//             <button className="text-black transition-transform duration-200 bg-yellow-400 rounded-md p-9 hover:bg-neutral-800 hover:text-white">
//               Know More
//             </button>
//           </div>
//           <div
//             className="flex flex-col items-start justify-between p-10 space-y-4 bg-center bg-cover rounded-lg"
//             style={{
//               backgroundImage: `url(${Rectangle})`,
//               width: "350px",
//               height: "378px",
//             }}
//           >
//             <span className="text-sm uppercase text-[#d1d5db]">Category</span>
//             <h2 className="text-2xl font-bold leading-tight text-white">
//               Introduction line heading or value proposition goes here in 4
//               lines.
//             </h2>
//             <button className="p-2 text-black transition-transform duration-200 bg-yellow-400 rounded-md hover:bg-neutral-800 hover:text-white">
//               Know More
//             </button>
//           </div>
//           <div
//             className="flex flex-col items-start justify-between p-6 space-y-4 bg-center bg-cover rounded-lg"
//             style={{
//               backgroundImage: `url(${Rectangle13})`,
//               width: "350px",
//               height: "378px",
//             }}
//           >
//             <span className="text-sm uppercase text-[#d1d5db]">Category</span>
//             <h2 className="text-2xl font-bold leading-tight text-white">
//               Introduction line heading or value proposition goes here in 4
//               lines.
//             </h2>
//             <button className="p-2 text-black transition-transform duration-200 bg-yellow-400 rounded-md hover:bg-neutral-800 hover:text-white">
//               Know More
//             </button>
//           </div>
//         </div>
//       </div> */}
//     </>
//   );
// };

// export default Four;

// src/Four.js
import React from "react";
import rectangles from "../assets/bgimg.jpg";

const FeatureService = () => {
  return (
    <div className="flex items-center justify-center w-full py-8 pt-4 mx-auto overflow-hidden">
      <div className="flex flex-row w-full gap-3 overflow-x-auto md:gap-1 max-w-8xl snap-x snap-mandatory scroll-smooth scrollbar-hide">
        {/** Card 1 */}
        <div
          className="relative flex-none text-white w-[85vw] h-[200px] px-0  sm:h-[280px] md:h-[380px] xl:h-[450px]  md:w-[50%] rounded-lg snap-center shrink-0 group bg-center bg-cover"
          style={{
            backgroundImage: `url(${rectangles})`,
          }}
        >
          <h1 className="z-10 flex items-center justify-center h-full text-2xl font-bold md:text-4xl group-hover:hidden">
            Featured <br className="block lg:hidden " />
            Services 01
          </h1>
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 bg-[#9727ff] bg-opacity-0 group-hover:bg-opacity-100">
            <h2 className="text-lg font-bold text-center transition-opacity duration-100 opacity-0 md:text-3xl group-hover:opacity-100">
              FEATURED SERVICE 01
            </h2>
            <div className="flex flex-col items-center justify-center">
              <p className="mt-2 text-sm transition-opacity duration-300 opacity-0 md:mt-4 md:text-base md:text-left group-hover:opacity-100">
                Description and details of this service go here in a short paragraph.
              </p>
              <ul className="mt-2 text-sm transition-opacity duration-300 opacity-0 md:mt-3 md:text-base md:text-left group-hover:opacity-100">
                <li>Like this</li>
                <li>Like this</li>
              </ul>
            </div>
          </div>
        </div>

        {/** Card 2 */}
        <div
          className="relative flex-none text-white w-[75vw] h-[200px] px-0  sm:h-[280px] md:h-[380px] xl:h-[450px]  md:w-[50%]  rounded-lg snap-center shrink-0 group bg-center bg-cover"
          style={{
            backgroundImage: `url(${rectangles})`,
          }}
        >
          <h1 className="z-10 flex items-center justify-center h-full text-2xl font-bold md:text-4xl group-hover:hidden">
            Featured <br className="block lg:hidden " />
            Services 02
          </h1>
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 bg-[#9727ff] bg-opacity-0 group-hover:bg-opacity-100">
            <h2 className="text-lg font-bold text-center transition-opacity duration-100 opacity-0 md:text-3xl group-hover:opacity-100">
              FEATURED SERVICE 02
            </h2>
            <div className="flex flex-col items-center justify-center">
              <p className="mt-2 text-sm transition-opacity duration-300 opacity-0 md:mt-4 md:text-base md:text-left group-hover:opacity-100">
                Description and details of this service go here in a short paragraph.
              </p>
              <ul className="mt-2 text-sm transition-opacity duration-300 opacity-0 md:mt-3 md:text-base md:text-left group-hover:opacity-100">
                <li>Like this</li>
                <li>Like this</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureService;

