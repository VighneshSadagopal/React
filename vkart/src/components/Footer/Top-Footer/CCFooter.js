import React from 'react'


export default function CCFooter(props) {
  return (
    <>
    <div className='cc-footer'>
    <div className='cs-logo'>
    {props.logo}
    </div>
     <div className='cs-container'>
        <h4>{props.heading}</h4>
        <body>{props.body}</body>
      </div>
      </div>
      </>
  )
}
