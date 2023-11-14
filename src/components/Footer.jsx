import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
      <ul className='footer-social'>
        <li className='footer-social-item'>[nateskiess no rights reserved]</li>
        <li className='footer-social-item'>==</li>
        <li className='footer-social-item'>
            <Link to='https://www.instagram.com/nateskiess/' className='smi'>INSTAGRAM</Link>
        </li>
        <li className='footer-social-item'>
            <Link to='https://twitter.com/nateskiess' className='smi'>TWITTER</Link>
        </li>
        <li className='footer-social-item'>
            <Link to='https://www.youtube.com/@nateskies' className='smi'>YOUTUBE</Link>
        </li>
      </ul>
    </div>
  )
}
