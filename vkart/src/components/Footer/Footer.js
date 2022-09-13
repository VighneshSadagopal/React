import React, { Component } from 'react'
import TopFooter from './Top-Footer/TopFooter'
import './Footer.css'
import MIdFooter from './Mid-Footer/MIdFooter'
import DownFooter from './Down-Footer/DownFooter'

export class Footer extends Component {
  render() {
    return (
      <>
      <div className='footer'>
        <div className='footer1'>
            <TopFooter />
            <MIdFooter />
            <DownFooter />
            </div>
      </div>
      
      </>
    )
  }
}

export default Footer
