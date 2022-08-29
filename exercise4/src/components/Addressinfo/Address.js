import React from "react";
import Heading from "../Heading/Heading";
import "./Address.css";

class Address extends React.Component {
  constructor(props) {
    super(props);
    // set state for address.
    this.state = {
      address: "",
  }
  }
  // handle change for address.
  handleAddressChange = (event) => {
   this.props.add(event.target.value)
  }

  render() {
    return (
      <>
        <div className="address">
          <Heading heading="Address Information" />
          <div className="address-info">
            <label>Address:</label>
            <textarea type="text" placeholder="Enter your address" onChange={this.handleAddressChange}></textarea>
          </div>
        </div>
      </>
    );
  }
}
export default Address;