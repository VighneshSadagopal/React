import React from "react";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import "./Theater.css";
import DateSelect from "../DateSelect/DateSelect";
import ShowTimings from "./ShowTimings/ShowTimings";
import { useState } from "react";

export default function Theater(props) {
  const today = new Date();
  const todayDate = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;
  let { thisFilms } = props;
  const [dates, setDates] = useState(todayDate);
  const handleChange = (e) => {
    setDates(e.target.value);
  };

    return (
      <>
      {
  thisFilms.map((value) => {
    return(
        <>
        <div className="ticket-booking-list">
           <div className="top-bar">
             <div className="top-left">
               <div className="title">{value.attributes.title}</div>
               <div className="top-bottom-left">
                 <span className="age-rating">
                   {value.attributes.field_age_rating}
                 </span>
                 {value.attributes.field_genre.map((item) => {
                   return (
                     <button className="genre-button">
                       <span>{item}</span>
                     </button>
                   );
                 })}
                 <span className="release-date">
                   {new Date(
                     value.attributes.field_release_date
                   ).toLocaleDateString("en-us", {
                     year: "numeric",
                     month: "short",
                     day: "numeric",
                   })}
                 </span>
                 <span className="duration">
                   <HistoryToggleOffIcon />
                   &nbsp;{value.attributes.field_duration}
                 </span>
               </div>
             </div>
             <div className="top-right"></div>
           </div>
           <div className="second-bar">
             <DateSelect dates={dates} onClick={handleChange} />
           </div>
           <div className="main-window">
             <ShowTimings
               dates={dates}
               filmId={value.attributes.field_film_id}
             />
           </div>
         </div>
         </>
    )
  })
      }
      

      </>
)}
