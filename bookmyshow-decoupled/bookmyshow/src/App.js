import "./App.css";
import { useState,useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/MainComponent/Carousel/Carousel";
import Recommended from "./components/MainComponent/Recommended/Recommended";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "./components/MainComponent/Recommended/MovieDetail/MovieDetail";
import MainComponent from "./components/MainComponent/MainComponent";
import Booking from "./components/MainComponent/Booking/Booking";
import SeatSelect from "./components/MainComponent/Booking/Theater/ShowTimings/SeatSelect/SeatSelect";
import TicketCheck from "./components/MainComponent/Booking/TicketCheck/TicketCheck";
import axios from "axios";
import jsonapi from "jsonapi-parse";
import LoginPage from "./components/Login/LoginPage";

function App(props) {
  const [filmdata, setFilmData] = useState([]);
  const [image, setImage] = useState([]);
  const [all, setAll] = useState([]);
  const { geolocation } = props;
  const [city, setCity] = useState("Pune");
  function onChangeValue(e) {
    setCity(e.target.value);
  }
  const getFilmData = async () => {
    try {
      const res = await axios.get(
        "http://bookmyshow-drupal.ddev.site/jsonapi/node/films?include=field_poster"
      );
      if (res.status === 200) {
        
        setFilmData(res.data.data);
        setAll(jsonapi.parse(res.data))
      }
      return res.data;
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    getFilmData();
    axios({
      method: 'post',
      url: 'http://localhost:3000/home',
      data: {
          'value': 'abcdefg'
      }
  })
  }, []);

  return (
    <div className="App">
      <div className="container-1">
        <Navbar
          cityname={city}
          profilename={"Vighnesh"}
          city={city}
          onChangeValue={onChangeValue}
          geolocation={geolocation}
        />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComponent city={city} filmdata={filmdata} all={all}/>} />
          <Route path="/movie/:filmId" element={<MovieDetail filmdata={filmdata} all={all}/>} />
          <Route path="/bookingcounter/:filmId" element={<Booking filmdata={filmdata} all={all}/>} />
          <Route path="/:filmId/seatselect" element={<SeatSelect />} />
          <Route path="/:filmId/booktickets" element={<TicketCheck />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      <div className="container-2"></div>
    </div>
  );
}

export default App;
