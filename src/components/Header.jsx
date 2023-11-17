import React from 'react'
import { Link} from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <Link to="/">
        <h2 className='header-logo'>NATE SKIES ==</h2>
      </Link>
      <nav className='header-nav'>
        <Link to='/videoclips' className='header-nav-text'>CLIPS</Link>
        <Link to='/music' className='header-nav-text'>MUSIC</Link>
        <Link to='/bio' className='header-nav-text'>BIO</Link>
        <Link to='/merch' className='header-nav-text'>MERCH</Link>
      </nav>
    </div>
  ) 
}
