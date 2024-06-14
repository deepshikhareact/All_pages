import React from "react";
import First from "./Components/First";
import Banner from "./Components/Banner";
import BigHead from "./Components/BigHead";
import FeatureService from "./Components/FeatureService";
import Category from "./Components/Category";
import ZoomCard from "./Components/ZoomCard";
import BigHeadCard from "./Components/BigHeadCard";
import BigHeadCardafter from "./Components/BigHeadCardafter";
import ZoomTwoBox from "./Components/ZoomTwoBox";
import Imagegrid from "./Components/Imagegrid";
import Profileimg from "./Components/Profileimg";
import LastCard from './Components/LastCard'

function App() {
  return (
    <div>
      <First />
      <Banner/>
      <BigHead />
      <FeatureService />
      <Category />
      <ZoomCard />
      <BigHeadCard />
      <BigHeadCardafter />
      <ZoomTwoBox />
      <Imagegrid />
      <Profileimg />
      <LastCard />
    </div>
  );
}

export default App;
