import { useState } from "react";
import "./App.css";
import Product from "./components/ProductInfo/Product";
import Address from "./components/Addressinfo/Address";
import Summary from "./components/summary/Summary";
import Order from "./components/Order/Order";
function App() {
  const [productName, setProductName] = useState("Product-1");
  const [quantity, setQuantity] = useState(0);
  const [address, setAddress] = useState("");

  const [productDetails, setProductDetails] = useState({});

  const products = [
    {
      id: 1,
      name: "Product-1",
    },
    {
      id: 2,
      name: "Product-2",
    },
    {
      id: 3,
      name: "Product-3",
    },
  ];
  const setVal = (name) => {
    setProductName(name);
  };
  const setQuan = (quantity) => {
    setQuantity(quantity);
  };
  const setAdd = (add) => {
    setAddress(add);
  };


  const onClickHandler = () => {
    setProductDetails({
      name: productName,
      quan: quantity,
      add: address,
    });
  };
  return (
    <div className="App">
      <Product
        products={products}
        val={setVal}
        quan={setQuan}
      ></Product>
      <Address add={setAdd}></Address>
      <Summary
        productDetails={productDetails}
      ></Summary>
      <Order onClick={onClickHandler}>Order</Order>
    </div>
  );
}

export default App;
