import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
      <ul className='footer-social'>
        <li className='footer-social-item icon'>==</li>
        <il className='footer-social-item'>
            <div className='plat'>
                <Link to='https://www.instagram.com/nateskiess/' className='smi'>INSTAGRAM</Link>
            </div>
            <div className='plat'>
                <Link to='https://twitter.com/nateskiess' className='smi'>TWITTER</Link>
            </div>
            <div className='plat'>
                <Link to='https://www.youtube.com/@nateskies' className='smi'>YOUTUBE</Link>
            </div>
        </il>
        <li className='footer-social-item icon'>==</li>
        
      </ul>
    </div>
  )
}
