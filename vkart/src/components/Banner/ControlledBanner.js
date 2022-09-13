import React, { Component } from 'react'
import Ban1 from './images/Banner2.jpg'
import Ban3 from './images/Banner3.jpg'
import Ban4 from './images/Banner4.jpg'
import Ban6 from './images/Banner6.jpg'
import './ControlledBanner.css'



class ControlledBanner extends Component {
  render() {
    return (
      <div className='top-banner'>
        <img
        className='d-block w-100'
          src ={Ban1} 
          
        />
         <img
        className='d-block w-100'
          src ={Ban3} 
          
        />
         <img
        className='d-block w-100'
          src ={Ban4} 
          
        />
         <img
        className='d-block w-100'
          src ={Ban6} 
          
        />
      </div>
    )
  }
}

export default ControlledBanner
