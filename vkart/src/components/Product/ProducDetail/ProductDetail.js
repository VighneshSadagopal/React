import React from "react";
import { products } from "../../../pages/Json/mobiledata";
import { useParams } from "react-router-dom";
import './ProductDetail.css'

export default function ProductDetail(props) {
  let {productId} = useParams();
  let thisProduct = products.find(prod => prod.id === productId);

  return (
    <>
      <div className="main-container">
        <div className="left-container">
          <div className="image">
            <img src={thisProduct.images} />
          </div>
        </div>
        <div className="right-container">
        <h2>{thisProduct.title}</h2>
        </div>
     
      </div>
    </>
  );
}
