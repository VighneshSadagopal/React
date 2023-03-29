import React, { useState } from "react";
import "./SelectList.css";

export default function SelectList(props) {
  const { city, onChangeValue } = props;
  let { geolocation } = props;

  const citydata = [
    {
      cityname: "Mumbai",
      alt: "Option1",
      cityimage:
        "https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png",
      geolocation: "19.0760 : 72.8777",
    },
    {
      cityname: "Delhi NCR",
      alt: "Option2",
      cityimage:
        "https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png",
      geolocation: "28.7041 : 77.1025",
    },
    {
      cityname: "Bengaluru",
      alt: "Option3",
      cityimage:
        "https://in.bmscdn.com/m6/images/common-modules/regions/bang.png",
      geolocation: "12.9716 : 77.5946",
    },
    {
      cityname: "Hyderabad",
      alt: "Option4",
      cityimage:
        "https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png",
      geolocation: "17.3850 : 78.4867",
    },
    {
      cityname: "Ahmedabad",
      alt: "Option5",
      cityimage:
        "https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png",
      geolocation: "23.0225 : 72.5714",
    },
    {
      cityname: "Chandigarh",
      alt: "Option6",
      cityimage:
        "https://in.bmscdn.com/m6/images/common-modules/regions/chd.png",
      geolocation: "30.7333 : 76.7794",
    },
    {
      cityname: "Chennai",
      alt: "Option7",
      cityimage:
        "https://in.bmscdn.com/m6/images/common-modules/regions/chen.png",
      geolocation: "13.0827 : 80.2707",
    },
    {
      cityname: "Pune",
      alt: "Option8",
      cityimage:
        "https://in.bmscdn.com/m6/images/common-modules/regions/pune.png",
      geolocation: "18.5196 : 73.8553",
    },

    {
      cityname: "Kolkata",
      alt: "Option9",
      cityimage:
        "https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png",
      geolocation: "22.5726 : 88.3639",
    },
    {
      cityname: "Kochi",
      alt: "Option10",
      cityimage:
        "https://in.bmscdn.com/m6/images/common-modules/regions/koch.png",
      geolocation: "9.9312 : 76.2673",
    },
  ];
  return (
    <>
      {citydata.map((data, key) => {
        geolocation = data.geolocation;
        return (
          <div className="selectlist" onChange={onChangeValue} key={key} >
            <label key={key}>
              <input
                type="radio"
                value={data.cityname}
                name="city"
                checked={city === data.cityname}
              />
              <img src={data.cityimage} alt={data.alt} />
              <h3>{data.cityname}</h3>
            </label>
          </div>
        );
      })}
    </>
  );
}
