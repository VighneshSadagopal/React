import React, { Component } from 'react'
import ControlledBanner from './ControlledBanner'
import BannerVideo from './images/Bannervideo.mp4'



class Banner extends Component {
  render() {
    return (
     <>
     <div className='banner'>
            <ControlledBanner/>
            <video
            src={ BannerVideo }
            autoPlay loop
            className='bannervideo'
           
            type="video/mp4" 
        />
     </div>
     </>
    )
  }
}

export default Banner
