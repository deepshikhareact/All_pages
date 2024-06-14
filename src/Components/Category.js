// import React from "react";
// import Image from "../assets/samm.jpg";
// import Rectangle from "../assets/Rectangle.png";
// import Rectangle13 from "../assets/img3.jpg";
// const Five = () => {
//   return (
//     <div>
//       <div className="flex overflow-y-auto gap-6 md:overflow-hidden flex-row items-center justify-center  h-[450px]  ">
//         <div
//           className="flex flex-col items-start justify-around p-6 space-y-2 bg-center bg-cover "
//           style={{
//             backgroundImage: `url(${Image})`,
//             width: "300px",
//             height: "378px",
//           }}
//         >
//           <span className="flex justify-center text-sm uppercase text-[#d1d5db]">
//             Category
//           </span>
//           <h2 className="text-lg font-bold leading-tight text-white md:text-2xl">
//             Introduction line heading or value proposition goes here in 4 lines.
//           </h2>
//           <button className="px-2 py-1 text-black transition-transform duration-200 bg-yellow-400 rounded-md md:py-2 md:px-4 hover:bg-neutral-800 hover:text-white">
//             Know More
//           </button>
//         </div>
//         <div
//           className="flex flex-col items-start justify-around p-6 space-y-2 bg-center bg-cover "
//           style={{
//             backgroundImage: `url(${Rectangle})`,
//             width: "300px",
//             height: "378px",
//           }}
//         >
//           <span className="flex justify-center text-sm uppercase text-[#d1d5db]">
//             Category
//           </span>
//           <h2 className="text-lg font-bold leading-tight text-white md:text-2xl">
//             Introduction line heading or value proposition goes here in 4 lines.
//           </h2>
//           <button className="px-2 py-1 text-black transition-transform duration-200 bg-yellow-400 rounded-md md:py-2 md:px-4 hover:bg-neutral-800 hover:text-white">
//             Know More
//           </button>
//         </div>
//         <div
//           className="flex flex-col items-start justify-around p-4 space-y-2 bg-center bg-cover "
//           style={{
//             backgroundImage: `url(${Rectangle13})`,
//             width: "300px",
//             height: "378px",
//           }}
//         >
//           <span className="flex justify-center text-sm uppercase text-[#d1d5db]">
//             Category
//           </span>
//           <h2 className="text-lg font-bold leading-tight text-white md:text-2xl">
//             Introduction line heading or value proposition goes here in 4 lines.
//           </h2>
//           <button className="px-2 py-1 text-black transition-transform duration-200 bg-yellow-400 rounded-md md:py-2 md:px-4 hover:bg-neutral-800 hover:text-white">
//             Know More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Five;


// src/Five.js
//     
// import React from "react";
// import Image from "../assets/samm.jpg";
// import Rectangle from "../assets/Rectangle.png";
// import Rectangle13 from "../assets/img3.jpg";

// const Five = () => {
//   return (
//     <div className="flex items-center justify-center px-8 py-4">
//       <div className="flex w-full h-auto gap-6 overflow-x-auto md:overflow-hidden max-w-7xl">
//         {/* Card 1 */}
//         <div
//           className="flex flex-col items-start justify-between p-6 space-y-2 bg-center bg-cover min-w-[255px] md:w-[450px] h-[378px] md:h-[400px] rounded-lg"
//           style={{ backgroundImage: `url(${Image})` }}
//         >
//           <span className="text-sm text-gray-300 uppercase">
//             Category
//           </span>
//           <h2 className="text-lg font-bold leading-tight text-white md:text-2xl">
//             Introduction line heading or value proposition goes here in 4 lines.
//           </h2>
//           <button className="px-2 py-1 text-black transition-transform duration-200 bg-yellow-400 rounded-md md:py-2 md:px-4 hover:bg-neutral-800 hover:text-white">
//             Know More
//           </button>
//         </div>

//         {/* Card 2 */}
//         <div
//           className="flex flex-col items-start justify-between p-6 space-y-2 bg-center bg-cover min-w-[255px] md:w-[450px] h-[378px] md:h-[400px] rounded-lg"
//           style={{ backgroundImage: `url(${Rectangle})` }}
//         >
//           <span className="text-sm text-gray-300 uppercase">
//             Category
//           </span>
//           <h2 className="text-lg font-bold leading-tight text-white md:text-2xl">
//             Introduction line heading or value proposition goes here in 4 lines.
//           </h2>
//           <button className="px-2 py-1 text-black transition-transform duration-200 bg-yellow-400 rounded-md md:py-2 md:px-4 hover:bg-neutral-800 hover:text-white">
//             Know More
//           </button>
//         </div>

//         {/* Card 3 */}
//         <div
//           className="flex flex-col items-start justify-between p-6 space-y-2 bg-center bg-cover min-w-[255px] md:w-[450px] h-[378px] md:h-[400px]  rounded-lg"
//           style={{ backgroundImage: `url(${Rectangle13})` }}
//         >
//           <span className="text-sm text-gray-300 uppercase">
//             Category
//           </span>
//           <h2 className="text-lg font-bold leading-tight text-white md:text-2xl">
//             Introduction line heading or value proposition goes here in 4 lines.
//           </h2>
//           <button className="px-2 py-1 text-black transition-transform duration-200 bg-yellow-400 rounded-md md:py-2 md:px-4 hover:bg-neutral-800 hover:text-white">
//             Know More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Five;
import React from "react";
import Image from "../assets/samm.jpg";
import Rectangle from "../assets/Rectangle.png";
import Rectangle13 from "../assets/img3.jpg";

const Category = () => {
  return (
    <div className="flex items-center justify-center px-4 py-8">
      <div className="flex w-full h-auto gap-6 overflow-x-auto md:overflow-visible max-w-7xl">
        {/* Card 1 */}
        <div
          className="flex flex-col items-start justify-between p-6 space-y-2 bg-center bg-cover min-w-[255px] sm:min-w-[280px] md:w-[300px] lg:w-[450px] h-[300px] sm:h-[350px] md:h-[378px] lg:h-[400px] rounded-lg"
          style={{ backgroundImage: `url(${Image})` }}
        >
          <span className="text-sm text-gray-300 uppercase">
            Category
          </span>
          <h2 className="text-lg font-bold leading-tight text-white sm:text-xl md:text-2xl">
            Introduction line heading or value proposition goes here in 4 lines.
          </h2>
          <button className="px-2 py-1 text-black transition-transform duration-200 bg-yellow-400 rounded-md sm:px-3 sm:py-2 md:px-4 md:py-2 hover:bg-neutral-800 hover:text-white">
            Know More
          </button>
        </div>

        {/* Card 2 */}
        <div
          className="flex flex-col items-start justify-between p-6 space-y-2 bg-center bg-cover min-w-[255px] sm:min-w-[280px] md:w-[300px] lg:w-[450px] h-[300px] sm:h-[350px] md:h-[378px] lg:h-[400px] rounded-lg"
          style={{ backgroundImage: `url(${Rectangle})` }}
        >
          <span className="text-sm text-gray-300 uppercase">
            Category
          </span>
          <h2 className="text-lg font-bold leading-tight text-white sm:text-xl md:text-2xl">
            Introduction line heading or value proposition goes here in 4 lines.
          </h2>
          <button className="px-2 py-1 text-black transition-transform duration-200 bg-yellow-400 rounded-md sm:px-3 sm:py-2 md:px-4 md:py-2 hover:bg-neutral-800 hover:text-white">
            Know More
          </button>
        </div>

        {/* Card 3 */}
        <div
          className="flex flex-col items-start justify-between p-6 space-y-2 bg-center bg-cover min-w-[255px] sm:min-w-[280px] md:w-[300px] lg:w-[450px] h-[300px] sm:h-[350px] md:h-[378px] lg:h-[400px] rounded-lg"
          style={{ backgroundImage: `url(${Rectangle13})` }}
        >
          <span className="text-sm text-gray-300 uppercase">
            Category
          </span>
          <h2 className="text-lg font-bold leading-tight text-white sm:text-xl md:text-2xl">
            Introduction line heading or value proposition goes here in 4 lines.
          </h2>
          <button className="px-2 py-1 text-black transition-transform duration-200 bg-yellow-400 rounded-md sm:px-3 sm:py-2 md:px-4 md:py-2 hover:bg-neutral-800 hover:text-white">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
