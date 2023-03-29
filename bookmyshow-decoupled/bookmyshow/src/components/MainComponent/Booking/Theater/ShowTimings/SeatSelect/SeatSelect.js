import React from "react";
import "./SeatSelect.css";
import { seat } from "./Seat";
import { useState } from "react";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import SquareIcon from "@mui/icons-material/Square";
import { Link, useParams } from "react-router-dom";
import { films } from "../../../../Recommended/response";

export default function SeatSelect(props) {
  const {filmId} = useParams();
  const movie  = films.filter((data) => data.film_id === filmId);
  console.log(movie)
  const stylesquare1 = {
    color: "#eee",
  };
  const stylesquare2 = {
    color: "green",
  };
  const stylesquare3 = {
    color: "green",
  };
  const [seating, setSeating] = useState([]);

  const handleChange = (e) => {

    let newArray = [...seating, e.target.value];
    if (seating.includes(e.target.value)) {
      newArray = newArray.filter(day => day !== e.target.value);
    } 
    setSeating(newArray);
  };
  const rowA = seat.filter((row) => row.row === "A");
  const rowB = seat.filter((row) => row.row === "B");
  const rowC = seat.filter((row) => row.row === "C");
  const rowD = seat.filter((row) => row.row === "D");
  const rowE = seat.filter((row) => row.row === "E");
  const rowF = seat.filter((row) => row.row === "F");
  const rowG = seat.filter((row) => row.row === "G");
  const rowH = seat.filter((row) => row.row === "H");
  const rowI = seat.filter((row) => row.row === "I");
  const rowJ = seat.filter((row) => row.row === "J");
  const rowK = seat.filter((row) => row.row === "K");
  const rowL = seat.filter((row) => row.row === "L");
  const rowM = seat.filter((row) => row.row === "M");
  const rowN = seat.filter((row) => row.row === "N");
  const rowO = seat.filter((row) => row.row === "O");

  return (
    <>
      <div className="seat-select">
        <h4 className="main">RECLINER OFFILINE - Rs. 160.00</h4>
        <div className="rowA">
          <p className="head">A</p>
          <div className="head2">
            {rowA.map((data) => {
              return (
                <>
                  <input
                    type="checkbox"
                    value={data.id}
                    onChange={handleChange}
                  />
                  <span
                    className={data.value === null ? "nullSeat" : "selectSeat"}
                  >
                    {data.value}
                  </span>
                </>
              );
            })}
          </div>
        </div>
        <div className="rowB">
          <p className="head">B</p>
          <div className="head2">
            {rowB.map((data) => {
              return (
                <>
                  <input
                    type="checkbox"
                    value={data.id}
                    onChange={handleChange}
                  />
                  <span
                    className={data.value === null ? "nullSeat" : "selectSeat"}
                  >
                    {data.value}
                  </span>
                </>
              );
            })}
          </div>
        </div>
        <h4 className="main">PLATINUM OFFILINE - Rs. 120.00</h4>
        <div className="rowC">
          <p className="head">C</p>
          <div className="head2">
            {rowC.map((data) => {
              return (
                <>
                  <input
                    type="checkbox"
                    value={data.id}
                    onChange={handleChange}
                  />
                  <span
                    className={data.value === null ? "nullSeat" : "selectSeat"}
                  >
                    {data.value}
                  </span>
                </>
              );
            })}
          </div>
        </div>
        <div className="rowD">
          <p className="head">D</p>
          <div className="head2">
            {rowD.map((data) => {
              return (
                <>
                  <input
                    type="checkbox"
                    value={data.id}
                    onChange={handleChange}
                  />
                  <span
                    className={data.value === null ? "nullSeat" : "selectSeat"}
                  >
                    {data.value}
                  </span>
                </>
              );
            })}
          </div>
        </div>
        <div className="rowE">
          <p className="head">E</p>
          <div className="head2">
            {rowE.map((data) => {
              return (
                <>
                  <input
                    type="checkbox"
                    value={data.id}
                    onChange={handleChange}
                  />
                  <span
                    className={data.value === null ? "nullSeat" : "selectSeat"}
                  >
                    {data.value}
                  </span>
                </>
              );
            })}
          </div>
        </div>
        <div className="rowF">
          <p className="head">F</p>
          <div className="head2">
            {rowF.map((data) => {
              return (
                <>
                  <input
                    type="checkbox"
                    value={data.id}
                    onChange={handleChange}
                  />
                  <span
                    className={data.value === null ? "nullSeat" : "selectSeat"}
                  >
                    {data.value}
                  </span>
                </>
              );
            })}
          </div>
        </div>
        <div className="rowG">
          <p className="head">G</p>
          <div className="head2">
            {rowG.map((data) => {
              return (
                <>
                  <input
                    type="checkbox"
                    value={data.id}
                    onChange={handleChange}
                  />
                  <span
                    className={data.value === null ? "nullSeat" : "selectSeat"}
                  >
                    {data.value}
                  </span>
                </>
              );
            })}
          </div>
        </div>
        <h4 className="main">GOLD OFFILINE - Rs. 110.00</h4>
        <div className="rowH">
          <p className="head">H</p>
          <div className="head2">
            {rowH.map((data) => {
              return (
                <>
                  <input
                    type="checkbox"
                    value={data.id}
                    onChange={handleChange}
                  />
                  <span
                    className={data.value === null ? "nullSeat" : "selectSeat"}
                  >
                    {data.value}
                  </span>
                </>
              );
            })}
          </div>
        </div>
        <div className="rowI">
          <p className="head">I</p>
          <div className="head2">
            {rowI.map((data) => {
              return (
                <>
                  <input
                    type="checkbox"
                    value={data.id}
                    onChange={handleChange}
                  />
                  <span
                    className={data.value === null ? "nullSeat" : "selectSeat"}
                  >
                    {data.value}
                  </span>
                </>
              );
            })}
          </div>
        </div>
        <div className="rowJ">
          <p className="head">J</p>
          <div className="head2">
            {rowJ.map((data) => {
              return (
                <>
                  <input
                    type="checkbox"
                    value={data.id}
                    onChange={handleChange}
                  />
                  <span
                    className={data.value === null ? "nullSeat" : "selectSeat"}
                  >
                    {data.value}
                  </span>
                </>
              );
            })}
          </div>
        </div>
        <div className="rowK">
          <p className="head">K</p>
          <div className="head2">
            {rowK.map((data) => {
              return (
                <>
                  <input
                    type="checkbox"
                    value={data.id}
                    onChange={handleChange}
                  />
                  <span
                    className={data.value === null ? "nullSeat" : "selectSeat"}
                  >
                    {data.value}
                  </span>
                </>
              );
            })}
          </div>
        </div>
        <div className="rowL">
          <p className="head">L</p>
          <div className="head2">
            {rowL.map((data) => {
              return (
                <>
                  <input
                    type="checkbox"
                    value={data.id}
                    onChange={handleChange}
                  />
                  <span
                    className={data.value === null ? "nullSeat" : "selectSeat"}
                  >
                    {data.value}
                  </span>
                </>
              );
            })}
          </div>
        </div>
        <h4 className="main">SILVER OFFILINE - Rs. 100.00</h4>
        <div className="rowM">
          <p className="head">M</p>
          <div className="head2">
            {rowM.map((data) => {
              return (
                <>
                  <input
                    type="checkbox"
                    value={data.id}
                    onChange={handleChange}
                  />
                  <span
                    className={data.value === null ? "nullSeat" : "selectSeat"}
                  >
                    {data.value}
                  </span>
                </>
              );
            })}
          </div>
        </div>
        <div className="rowN">
          <p className="head">N</p>
          <div className="head2">
            {rowN.map((data) => {
              return (
                <>
                  <input
                    type="checkbox"
                    value={data.id}
                    onChange={handleChange}
                  />
                  <span
                    className={data.value === null ? "nullSeat" : "selectSeat"}
                  >
                    {data.value}
                  </span>
                </>
              );
            })}
          </div>
        </div>
        <div className="rowO">
          <p className="head">O</p>
          <div className="head2">
            {rowO.map((data) => {
              return (
                <>
                  <input
                    type="checkbox"
                    value={data.id}
                    onChange={handleChange}
                  />
                  <span
                    className={data.value === null ? "nullSeat" : "selectSeat"}
                  >
                    {data.value}
                  </span>
                </>
              );
            })}
          </div>
        </div>
      </div>
      {seating.length === 0  ? (
        <div className="bottom-info">
          <div className="iconmanage">
            <SquareIcon style={stylesquare1} /> Sold
          </div>
          <div className="iconmanage center">
            <CropSquareIcon style={stylesquare2} /> Available
          </div>
          <div className="iconmanage">
            <SquareIcon style={stylesquare3} /> Selected
          </div>
        </div>
      ) : (
        <div className="bottom-sticky">
          <Link to={`/${filmId}/booktickets`}><button className="booktickets">Book Tickets</button></Link>
        </div>
      )}
    </>
  );
}
