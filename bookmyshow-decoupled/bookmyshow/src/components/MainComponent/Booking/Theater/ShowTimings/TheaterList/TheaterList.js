import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./TheaterList.css";
import TimingButton from "./TimingButton";
import { theaterdata } from "../../../../../Json/Theaterjson";

export default function TheaterList(props) {
    const {dates,filmId} = props
//     const maindate = new Date('2022-10-20')
// console.log(maindate)

  let show = theaterdata[0].show_timings;
  
  let filteredShow = show.filter((t) => (new Date(props.dates).getTime()+t.unix) > Date.now())
 console.log(filteredShow)

  const mticketstyle = {
    color: "green",
  };
  const foodbevstyle = {
    color: "orange",
  };
  const infostyle = {
    color: "#7D7D7D",
    width: 14,
    height: 14,
  };
  const favicon = {
    stroke: "#99999",
    width: 17,
    height: 17,
  };
  return (
    <>
      <ul className="theater-card">
        {theaterdata.map((data) => {
          return (
            <li>
              <div className="left-contain">
                <button className="favicon">
                  <FavoriteBorderIcon style={favicon} />
                </button>

                <div className="theater-info">
                  <div className="left-info">
                    <h3>{data.theater_name}</h3>
                    <div className="icons">
                      <span className="m-ticket">
                        <SmartphoneIcon style={mticketstyle} />
                        <p>M-Ticket</p>
                      </span>
                      <span className="food-bev">
                        <FastfoodIcon style={foodbevstyle} />
                        <p>Food & Beverage</p>
                      </span>
                    </div>
                  </div>
                  <div className="info">
                    <InfoOutlinedIcon style={infostyle} /> &nbsp;<p>INFO</p>
                  </div>
                </div>
              </div>
              <div className="timings-button-list">
                {filteredShow.map((list) => {
                  return <TimingButton time={list.time} color={"green"} filmId={filmId}/>;
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
