import React from "react";
import {Link} from "react-router-dom"


export default function MovieCard(props) {
  let { filmId } = props;
  return (
    <div className="movie-card" key={props.key}>
      <div className="card">
      <Link to = {`/movie/${filmId}`}>
        <img src={props.icon} alt="img" />
        </Link>
      </div>
      <div className="title-genre">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}
