import React from "react";
import Heading from "../Heading/Heading";
import './Summary.css'

class Summary extends React.Component{
    constructor(props){
        super(props);
    }

    // Output the product name, product quantity, and address.
    render(){
        return(
            <>
                <div className="summary">
                    <Heading heading="Summary" />
                    <div className="summary-info">
                        <label>Product Name: &nbsp;&nbsp;&nbsp;
                        <span>{this.props.productDetails.name}</span>
                        </label>
                        <label>Product Quantity:&nbsp;&nbsp;&nbsp; 
                        <span>{this.props.productDetails.quan || ""}</span>
                        </label>
                        <label>Address:&nbsp;&nbsp;&nbsp;
                        <span>{this.props.productDetails.add}</span>
                        </label>
                    </div>
                </div>
            </>
        );
    }
}
export default Summary;