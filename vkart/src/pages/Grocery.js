import React, { Component } from 'react'
import Product from '../components/Product/Product'


export class Grocery extends Component {
  render() {
    return (
      <div className='grocery'>
     <Product category = 'grocery' />
      </div>
    )
  }
}

export default Grocery
