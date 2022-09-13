import React, { Component } from "react";
import MenuList from "./MenuList";
import "./MidFooter.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";

export class MIdFooter extends Component {
  render() {
    return (
      <>
        <div className="mid-footer">
          <MenuList
            title={"Our Company"}
            list={
              <>
                <li>
                  <a href="#">About US</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Responsible Design</a>
                </li>
                <li>
                  <a href="#">Social Responsibility</a>
                </li>
                <li>
                  <a href="#">Store Locations and Events</a>
                </li>
              </>
            }
          />
          <MenuList
            title={"Our Company"}
            list={
              <>
                <li>
                  <a href="#"> Customer Serivce</a>
                </li>
                <li>
                  <a href="#"> Account</a>
                </li>
                <li>
                  <a href="#"> Return Policy</a>
                </li>
                <li>
                  <a href="#"> Shipping Information</a>
                </li>
                <li>
                  <a href="#"> Email and Text Preferences</a>
                </li>
                <li>
                  <a href="#"> Gift Cards</a>
                </li>
                <li>
                  <a href="#"> Catalogs</a>
                </li>
                <li>
                  <a href="#"> Product Recalls</a>
                </li>
                <li>
                  <a href="#"> Accessibility Statement</a>
                </li>
                <li>
                  <a href="#"> CA Supply Chains Act</a>
                </li>
                <li>
                  <a href="#"> Do Not Sell My Personal Information</a>
                </li>
                <li>
                  <a href="#"> Cookie Settings</a>
                </li>
              </>
            }
          />
          <MenuList
            title={"Shopping App"}
            body={
              <>
                <span className="text">
                  Try our View in Your Room feature,
                  <br /> manage registries and <br />
                  save payment info.
                </span>
              </>
            }
          />
          <MenuList
            title={"Social Media"}
            icon={
              <>
                <div className="social-links">
                  <a href="#">
                    <FacebookIcon />
                  </a>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                  <a href="#">
                    <PinterestIcon />
                  </a>
                  <a href="#">
                    <TwitterIcon />
                  </a>
                </div>
              </>
            }
            body={
              <>
                <span className="text">
                  Show us your look with:
                  <br />
                  <br /> #CrateStyle
                  <br />
                  <br /> #CrateKidsStyle
                </span>
              </>
            }
          />
        </div>
      </>
    );
  }
}

export default MIdFooter;
