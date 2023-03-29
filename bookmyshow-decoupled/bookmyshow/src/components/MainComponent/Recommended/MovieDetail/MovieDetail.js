import React from "react";
import { films } from "../response";
import { Link, useParams } from "react-router-dom";
import "./MovieDetail.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export default function MovieDetail(props) {
  const { filmdata, image } = props;

  let { filmId } = useParams();

  let Films = filmdata
    .filter((movie) => movie.attributes.field_film_id === Number(filmId))
    .map((mov) => mov.attributes);


  
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    animation: "0.4s ease 0s 1 normal none running eDoYsu",
    borderRadius: 5,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const getMultipleRandom = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  };
  return (
    <>
      {Films.map((filmm) => {
        return (
          <div className="main-container">
            <div
              className="banner"
              style={{
                backgroundImage: `linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%),url(http://bookmyshow-drupal.ddev.site${filmm.field_poster[1].uri.url})`,
              }}
            >
              <div className="banner-container">
                <div className="trailer-clip">
                  <a href={filmm.field_fim_trailers[0].uri}>
                    <img
                      src={`http://bookmyshow-drupal.ddev.site${filmm.field_poster[0].uri.url}`}
                      alt="background-car"
                    />
                    <div className="trailer-label">
                      <PlayArrowIcon />
                      <label>Trailers</label>
                    </div>
                  </a>
                  <div className="release-status">
                    {new Date(filmm.field_release_date) < Date.now() ? (
                      <span>In Cinemas</span>
                    ) : (
                      <span>
                        Releasing on{" "}
                        {new Date(filmm.field_release_date).toLocaleDateString(
                          "en-us",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </span>
                    )}
                  </div>
                </div>
                <div className="movie-info">
                  <h1 className="title">{filmm.title}</h1>
                  <div className="movie-ratings">
                    {new Date(filmm.field_release_date) < Date.now() ? (
                      <>
                        <FavoriteIcon
                          style={{
                            color: "rgb(248, 68, 100) ",
                            width: "32px",
                            height: "32px",
                          }}
                        />
                        <span className="rate-percent">95%</span>
                        <span className="rate-rating">23.5K ratings</span>
                      </>
                    ) : (
                      <>
                        <ThumbUpIcon
                          style={{
                            color: "green",
                            width: "32px",
                            height: "32px",
                          }}
                        />
                        <span className="rate-like">147.4K</span>
                        <span className="rate-message">are intersted</span>
                      </>
                    )}
                  </div>
                  <div className="movie-review">
                    {new Date(filmm.field_release_date) < Date.now() ? (
                      <>
                        <div className="review-rate">
                          <div className="review-message">
                            <h5>Add your rating & review</h5>
                            <h6>Your ratings matter</h6>
                          </div>
                          <button className="rate-button">
                            <span>Rate Now</span>
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="review-release">
                          <div className="release-message">
                            <h3>
                              Releasing on{" "}
                              {new Date(
                                filmm.field_release_date
                              ).toLocaleDateString("en-us", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </h3>
                            <h4>Mark interested to know when bookings open</h4>
                          </div>
                          <button className="interested-button">
                            <span>I'm interested</span>
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="movie-format-language">
                    <span className="format-type c-style">
                      {filmm.field_movie_view_format.join(", ")}
                    </span>
                    <span className="languages c-style">
                      {filmm.field_language.join(", ")}
                    </span>
                  </div>
                  <div className="genre-time">
                    {new Date(filmm.field_release_date) < Date.now() ? (
                      <>
                        <span>
                          {filmm.field_duration}&nbsp;&nbsp;•&nbsp;&nbsp;
                          {filmm.field_genre.join(", ")}
                          &nbsp;&nbsp;•&nbsp;&nbsp;
                          {filmm.field_age_rating}&nbsp;&nbsp;•&nbsp;&nbsp;
                          {new Date(
                            filmm.field_release_date
                          ).toLocaleDateString("en-us", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </>
                    ) : (
                      <>
                        <span>
                          {filmm.field_duration}&nbsp;&nbsp;•&nbsp;&nbsp;
                          {filmm.field_genre.join(", ")}
                          &nbsp;&nbsp;•&nbsp;&nbsp;
                          {filmm.field_age_rating}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="book-ticket">
                    {filmm.field_genre.length > 1 &&
                    filmm.field_language.length > 1 ? (
                      <>
                        <button className="button-book" onClick={handleOpen}>
                          Book tickets
                        </button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style} className="selectformat">
                            <>
                              <div className="head-modal">
                                <h4>{filmm.title}</h4>
                                <h3>Select language and format</h3>
                              </div>
                              <div className="head-center">
                                {getMultipleRandom(filmm.field_language, 2).map(
                                  (data) => {
                                    return (
                                      <>
                                        <div className="cntrmanage">
                                          <div className="language">
                                            <span>{data}</span>
                                          </div>
                                          <div className="cntrbutton">
                                            {getMultipleRandom(
                                              filmm.field_movie_view_format,
                                              2
                                            ).map((item) => {
                                              return (
                                                <Link
                                                  to={`/bookingcounter/${filmm.field_film_id}`}
                                                >
                                                  <button className="format-button">
                                                    {item}
                                                  </button>
                                                </Link>
                                              );
                                            })}
                                          </div>
                                        </div>
                                      </>
                                    );
                                  }
                                )}
                              </div>
                            </>
                          </Box>
                        </Modal>
                      </>
                    ) : (
                      <button className="button-book">
                        <Link to={`/bookingcounter/${filmm.field_film_id}`}>
                          Book tickets
                        </Link>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="second-container">
              <div className="about-movie">
                <h4> About the movie</h4>
                <span>{filmm.field_synopsis}</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
