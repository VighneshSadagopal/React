import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import Slider from "react-slick";
import "./Recommended.css";
import { useState, useEffect } from "react";
import { films } from "./response";

export default function Recommended(props) {
  const { city, filmdata, all } = props;

  return (
    <>
      <h2>Recommended Movies</h2>
      <Slider
        dots={false}
        slidesToShow={5}
        slidesToScroll={5}
        autoplay={false}
        arrows={true}
        lazyLoad={"anticipated"}
      >
        {filmdata.map((data, key) => {
          return (
            <MovieCard
              icon={`http://bookmyshow-drupal.ddev.site${data.attributes.field_poster[0].uri.url}`}
              filmId={data.attributes.field_film_id}
              title={data.attributes.title}
            />
          );
        })}
      </Slider>
    </>
  );
}
