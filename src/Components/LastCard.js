import React from 'react'
import Rectangle from "../assets1/img/Rectangle.png";
import rectangle1 from "../assets1/img/rectangle1.png";
import rectangle7 from "../assets1/img/rectangle7.png";
import rectangle11 from "../assets1/img/rectangle11.png";
// import Image from "../assets/img/Image.png";
const LastCard = () => {
  return (

    <div className="flex h-auto gap-3 p-2 overflow-x-auto overflow-y-auto md:flex-nowrap">
  <div
    className="flex flex-col items-start justify-between p-6 space-y-4 bg-center bg-cover rounded-lg min-w-[250px] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] h-[350px] sm:h-[400px] md:h-[450px]"
    style={{ backgroundImage: `url(${Rectangle})` }}
  >
    <span className="text-sm uppercase text-[#d1d5db]">SERVICE</span>
    <h2 className="text-xl font-bold leading-tight text-white">
   User Research <br />
   &insights
    </h2>
    
  </div>
  <div
    className="flex flex-col items-start justify-between p-6 space-y-4 bg-center bg-cover rounded-lg min-w-[250px] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] h-[350px] sm:h-[400px] md:h-[450px]"
    style={{ backgroundImage: `url(${rectangle1})` }}
  >
    <span className="text-sm uppercase text-[#d1d5db]">CASE STUDY</span>
    <h2 className="text-xl font-bold leading-tight text-white">
    User Research<br />
   &insights
    </h2>
   
  </div>
  <div
    className="flex flex-col items-start justify-between p-6 space-y-4 bg-center bg-cover rounded-lg min-w-[250px] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] h-[350px] sm:h-[400px] md:h-[450px]"
    style={{ backgroundImage: `url(${rectangle7})` }}
  >
    <span className="text-sm uppercase text-[#f3f8ff]">FEATURED WORK</span>
    <h2 className="text-xl font-bold leading-tight text-white">
    User Research <br />
   &insights
    </h2>
    
  </div>
  <div
    className="flex flex-col items-start justify-between p-6 space-y-4 bg-center bg-cover rounded-lg min-w-[250px] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] h-[350px] sm:h-[400px] md:h-[450px]"
    style={{ backgroundImage: `url(${rectangle11})` }}
  >
    <span className="text-sm uppercase text-[#ffffff]">HAND PICKED</span>
    <h2 className="text-xl font-bold leading-tight text-white">
    User Research <br />
   &insights
    </h2>
    
  </div>
</div>


  )
}

export default LastCard
