import React from "react";
import Carousel from "./Carousel/Carousel";
import Recommended from "./Recommended/Recommended";

export default function MainComponent(props) {
    const { geolocation, city,filmdata,all} = props;
  
  return (
    <>
      <Carousel />
      <div className="recommended-movies">
        {" "}
        <Recommended geolocation={geolocation} city={city} filmdata={filmdata} all={all}/>
      </div>
    </>
  );
}
