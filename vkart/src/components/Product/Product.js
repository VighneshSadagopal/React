import ProductCard from "./ProductCard/ProductCard";
import {products} from "../../pages/Json/mobiledata"
import React from "react";
import ProductDetail from "./ProducDetail/ProductDetail";


export default function Product(props) {
  
  let {category} = props
  let filter = products.filter(data => 
    data.category === category
    )
    
    return (
      <>
      <div className="pcard">
        
        {filter.map((data, key) => {
          return (
            <div key={key}>
              <ProductCard 
              id = {data.id}
                title={data.title}
                old_price={data.oldprice}
                newPrice={data.newprice}
                dollar="₹"
                images={data.images}
                alt={data.alt}
              />
            </div>
          );
        })}
      </div>
      </>
    );
  }
