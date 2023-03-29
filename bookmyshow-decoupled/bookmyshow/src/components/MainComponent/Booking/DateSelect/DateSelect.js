import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import "./DateSelect.css";

export default function DateSelect(props) {
  const {handleChange,dates} = props

  const date = new Date();
  
  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat","Sun"];
  const mon = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dateArr = [
    [`${date.getDate()}`, `${days[date.getDay()]}`, `${mon[date.getMonth()]}`,`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`],
    [
      `${date.getDate() + 1}`,
      `${days[date.getDay() + 1]}`,
      `${mon[date.getMonth()]}`,
      `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()+1}`
    ],
    [
      `${date.getDate() + 2}`,
      `${days[date.getDay() + 2]}`,
      `${mon[date.getMonth()]}`,
      `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()+2}`
    ],
    [
        `${date.getDate() + 3}`,
        `${days[date.getDay() + 3]}`,
        `${mon[date.getMonth()]}`,
        `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()+3}`
      ],
  ];

  return (
    <>
      <div className="date-select">
        <Slider
          dots={false}
          slidesToShow={4}
          slidesToScroll={1}
          arrows={true}
          lazyLoad={"anticipated"}
          variableWidth={true}
        >
          {dateArr.map((data, key) => {
            return (
                <button className="datebutton" onClick={props.onClick} key={key} >
                <label key={key}>
                  <input
                    type="radio"
                    value={data[3]}
                    name="date"
                    checked={props.dates === data[3]}
                  />
                 <div className="date-container">
                  <p>{data[1]}</p>
                  <h3>{data[0]}</h3>
                  <span>{data[2]}</span>
                  </div>
                 
                </label>
                </button>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
