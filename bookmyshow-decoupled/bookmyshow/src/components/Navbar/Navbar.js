import React from "react";
import logo from "./images/logo.png";
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import CitySelect from "./CitySelect/CitySelect";
import Profile from "./Profile/Profile";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const {city , onChangeValue, geolocation} = props
  return (
    <>
      <div className="navbar">
        <div className="block-contain">
          <div className="block-1">
            <a href='/'><img src={logo} /></a>
            <button className="search"><SearchIcon />Search for Movies, Events, Plays, Sports and Activities</button>
          </div>
          <div className="block-2">
            <CitySelect cityname={props.cityname} city={city} onChangeValue={onChangeValue} geolocation = {geolocation} />
            <Profile  />
          </div>
        </div>
        {/* <div className="block-contain2">
          <div className="nav-left">
            <ul>
              <li>Movies</li>
              <li>Stream</li>
              <li>Events</li>
              <li>Plays</li>
              <li>Sports</li>
              <li>Activities</li>
              <li>Buzz</li>
            </ul>
          </div>
          <div className="nav-right">
          <ul>
              <li>ListYourShow</li>
              <li>Corporate</li>
              <li>Offers</li>
              <li>Gift Card</li>
            </ul>
          </div>
        </div> */}
      </div>
    </>
  );
}
