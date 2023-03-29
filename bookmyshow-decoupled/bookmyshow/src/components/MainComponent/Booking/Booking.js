import React from 'react'
import Theater from './Theater/Theater'
import { useParams } from 'react-router-dom';
import { films } from '../Recommended/response';
import DateSelect from './DateSelect/DateSelect';

export default function Booking(props) {
  const {filmdata , all} = props;
    let { filmId } = useParams();
    let thisFilms = filmdata.filter((movie) => movie.attributes.field_film_id === Number(filmId));
  return (
    <>
    <Theater thisFilms = {thisFilms}/>
    </>
  )
}
