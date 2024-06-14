// import React from "react";

// const Six = () => {
//   const cartItems = [
//     { id: 1, image: "bg12.jpg", icon: "zoom.png" },
//     { id: 2, image: "bg122.png", icon: "zoom.png" },
//     { id: 3, image: "bg123.png", icon: "zoom.png" },
//     { id: 4, image: "bg124.png", icon: "zoom.png" },
  
//     // ... other cart items
//   ];

//   return (
//     <div className="container px-4 py-8">
//       <div className="flex flex-row items-center justify-start space-x-2 overflow-y-auto md:flex-nowrap md:justify-center ">
//         {cartItems.map((item) => (
//           <div key={item.id} className="relative flex-none w-56 h-60">
//             <div className="w-full h-full overflow-hidden bg-white rounded shadow-md">
//               <img
//                 src={item.image}
//                 alt={`Cart item ${item.id}`}
//                 className="object-cover w-full h-full"
//               />

//               <div className="absolute inset-0 flex items-center justify-center text-white">
//                 <img
//                   src={item.icon}
//                   alt={`Icon for cart item ${item.id}`}
//                   className="transition-transform transform cursor-pointer w-14 h-14 hover:scale-125"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Six;

import React from "react";

// Import images


const ZoomCard = () => {
  const cartItems = [
    { id: 1, image: "bg12.png", icon: "zoom.png" },
    { id: 2, image: "bg122.png", icon: "zoom.png" },
    { id: 3, image: "bg123.png", icon: "zoom.png" },
    { id: 4, image: "bg124.png", icon: "zoom.png" },
  
  ];

  return (
    <div className="container py-8 ">
    <div className="flex space-x-4 overflow-x-auto flex-nowrap md:overflow-visible md:justify-center">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="relative flex-none w-40 h-40 sm:w-40 sm:h-56 md:w-[calc(24%-1rem)] md:h-[calc(50%-1rem)] lg:w-60 lg:h-60 xl:w-48 xl:h-72"
        >
          <div className="relative w-full h-full overflow-visible bg-white rounded shadow-md">
            <img
              src={item.image}
              alt={`Cart item ${item.id}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black bg-opacity-50 hover:bg-opacity-0">
              <img
                src={item.icon}
                alt={`Icon for cart item ${item.id}`}
                className="w-10 h-10 transition-transform transform cursor-pointer sm:w-12 sm:h-12 md:w-14 md:h-14 hover:scale-125"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
    
  );
};

export default ZoomCard;

