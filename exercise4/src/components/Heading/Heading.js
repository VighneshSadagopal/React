import React from "react";

class Heading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: props.heading,
        };
    }
  render() {
    return (
      <div className="heading">
        <h1>{this.state.heading}</h1>
      </div>
    );
  }
}
export default Heading;