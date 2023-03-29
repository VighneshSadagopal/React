import React from 'react'
import './LoginPage.css'
import logo from '../Navbar/images/logo.png'
export default function LoginPage() {
  return (
   <>
    <div className='login-page'>
        <div className='login-block'>
            <form id='login'>
                <img src={logo} alt='logo' className='logoimage'/>
                <input type='text' placeholder='Username'/>
                <input type='text' placeholder='Password'/>
                <button className='submit'>Login</button>
            </form>
        </div>
    </div>
   </>
  )
}
