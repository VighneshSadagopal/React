import React, { Component } from "react";
import './DownFooter.css'
import logo from '../images/vkartlogo.png'

export class DownFooter extends Component {
  render() {
    return (
      <>
        <div className="down-footer">
                <img 
                src={logo}
                />
            <div className="legaltext">
            <strong className="copyright">©2022 VKart . All rights reserved.</strong>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy</a>
            <a href="#">Site Index</a>
            <a href="#">Ad Choices</a>
            <a href="#">Co-Browse</a>
            <p className="screen-reader-note">
                    If you are using a screen reader and are having problems using this website, please call (800) 967-6696 for assistance.
                </p>
            </div>
        </div>
      </>
    );
  }
}

export default DownFooter;
