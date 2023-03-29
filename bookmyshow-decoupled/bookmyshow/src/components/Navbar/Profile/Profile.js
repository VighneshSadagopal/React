import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

export default function Profile(props) {
  return (
    <>
    <div className='profile'>
    {/* <AccountCircleIcon /> &nbsp;&nbsp; Hi,&nbsp;{props.profilename} */}
    <a href="/login"><button className='signin'>Sign In</button></a>
    </div>
    </>
  )
}
