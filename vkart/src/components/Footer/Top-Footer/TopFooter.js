import React, { Component } from "react";
import CCFooter from "./CCFooter";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import "./TopFooter.css";

export class TopFooter extends Component {
  render() {
    return (
      <>
        <div className="top-footer">
          <CCFooter
            logo={<AddIcCallIcon />}
            heading={"Contact US"}
            body={
              <div className="body1">
                <p>
                  Text:312-779-1979
                  <br />
                  Mon - Fri: 8 am - 8 pm CT <br />
                  Sat - Sun: 8 am - 7 pm CT
                </p>
              </div>
            }
          />
          <CCFooter
            logo={<CreditCardIcon />}
            heading={"Credit Card"}
            body={
              <div className="body1">
                <p>
                  Earn Reward Dollars every time you shop*
                  <br /> (excluding special financing purchases),
                  <br />
                  plus get access to special offers and events
                </p>
                <a href="#">Apply Now</a>
                <br />
                <a href="#">Manage Your Account</a>
              </div>
            }
          />
          <CCFooter
            logo={<ViewInArIcon />}
            heading={"Order Tracking & Schedule Delivery"}
            body={
              <div className="body1">
                <p>
                  Find out when your online purchase
                  <br />
                  will arrive or schedule a delivery.{" "}
                </p>

                <a href="#">Track Your Order</a>
                <br />
                <a href="#">Schedule Delivery</a>
              </div>
            }
          />
        </div>
      </>
    );
  }
}

export default TopFooter;
