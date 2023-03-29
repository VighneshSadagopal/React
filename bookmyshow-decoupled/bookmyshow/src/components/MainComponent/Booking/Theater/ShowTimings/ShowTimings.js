import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './ShowTimings.css'
import TheaterList from './TheaterList/TheaterList';

export default function ShowTimings(props) {
  const {dates,filmId} = props
    const style1 = {
        fontSize: 'small',
        color: 'green'
    }
    const style2 = {
        fontSize: 'small',
        color: 'orange'
    }
  return (
    <>
    <div className='showtimings'>
      <div className='avialable'>
        <div className='avialibilty-status-label'>
        <FiberManualRecordIcon style={style1} /> Available
        &nbsp; &nbsp;
        <FiberManualRecordIcon style={style2} /> Filling Fast

        </div>
        </div>
        <div className='theater-list'>
            <TheaterList dates={dates} filmId={filmId}/>
        </div>
    </div>
    </>
  )
}
