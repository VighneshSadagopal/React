import React from "react";
import Heading from "../Heading/Heading";
import "./Product.css";

class Product extends React.Component {
    constructor(props) {
        super(props)
        
       
    }
    // handle change for product quantity.
    handleQuantityChange = (event) => {
          this.props.quan(event.target.value)
        };
    
    onChangeHandler = (e) => {
     this.props.val(e.target.value)
    }

    
  render() {
    return (
     <>
        <div className="product">
            <Heading heading="Product Information" />
            <div className="product-info">
                <label>Product Name:</label>
                <select onChange={this.onChangeHandler} name="product" id="product">
                {this.props.products.map((item) => {
            return (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            );
          })}

          </select>
                <label>Product Quantity:</label>
                <input type="text" placeholder="Enter your quantity" onChange={this.handleQuantityChange} />
            </div>
        </div>
     </>
    );
    // console.log(this.state.product);
    // console.log(this.state.productQuantity);
  }
}
export default Product;