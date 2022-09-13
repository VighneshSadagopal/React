import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Header_1/NavBar';
import Grocery from '../pages/Grocery';
import Appliances from '../pages/Appliances'
import Beauty from '../pages/Beauty'
import Electronics from '../pages/Electronics'
import Fashion from '../pages/Fashion'
import Mobile from '../pages/Mobile'
import Travel from '../pages/Travel'
import Banner from './Banner/Banner';
import ProductDetail from './Product/ProducDetail/ProductDetail';


export default function MainComponent() {
  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="grocery" element={<Grocery />} />
          <Route path="/" element={<Banner />} />
          <Route path="/appliances" element={<Appliances />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/mobiles" element={<Mobile />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/products/:productId" element={<ProductDetail />} /> 
        </Route>
         
      </Routes>
    </BrowserRouter>  
   
    </div>
  )
}
