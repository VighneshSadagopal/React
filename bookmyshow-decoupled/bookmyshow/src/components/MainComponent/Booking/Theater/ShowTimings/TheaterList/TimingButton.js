import { DisplaySettings } from '@mui/icons-material'
import { fontSize } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import SeatSelect from '../SeatSelect/SeatSelect'

export default function TimingButton(props) {
  const {filmId} = props;
    const buttonstyle = {
        color: props.color,
        fontSize: props.fontSize
    }
    const handleHover = () => {
     document.getElementById('timebutton').classList.add('show')
    }
  return (
   <>
   <button id= 'timebutton' className='time-button' style={buttonstyle} onMouseOver={handleHover}>
   <Link to={`/${filmId}/seatselect`}>{props.time}</Link>
   </button>
   </>
  )
}
