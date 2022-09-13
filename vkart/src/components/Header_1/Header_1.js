import React, { Component } from 'react'
import logo from './images/vkartlogo.png'
import { Person2 , Favorite} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header_1.css'


export class Header_1 extends Component {
  render() {
    return (
     <>
        <div className='top-header'>
            <div className='logo'>
                <img src= {logo} ></img>
               
            </div>
            <nav className='top-nav'>
              <button><Person2 />Vighnesh</button>
              <button><Favorite />Fav </button>
              <button><ShoppingCartIcon />Cart </button>
            </nav>
        </div>
      
     </>
    )
  }
}

export default Header_1
