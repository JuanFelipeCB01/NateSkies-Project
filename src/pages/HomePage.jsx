  import React from 'react';
  import natelogo from '../media/natelogo.png';
  import MacFolder from '../media/icons8-mac-folder-96.png'
  import Photo1 from '../media/photo1.png';
  import Photo2 from '../media/photo2.png';
  import Photo3 from '../media/photo3.png';
  import Photo4 from '../media/photo4.png';
  import { Link } from 'react-router-dom';

  export default function HomePage() {
    return (
      <div className='home'>
          <section className='home-header'>
              <img className='home-header-logo' src={natelogo} alt='logo'/>
          </section>
          <section className='home-folders'>
              <Link to='/bio' className='home-folders-item folder1'>
                <img className='folder-img' src={MacFolder} alt='folder'/>
                <span>BIO</span>
              </Link>
              <Link to='/videoclips' className='home-folders-item folder2'>
                <img className='folder-img' src={MacFolder} alt='folder'/>
                <span>CLIPS</span>
              </Link>
              <Link to='/music' className='home-folders-item folder3'>
                <img className='folder-img' src={MacFolder} alt='folder'/>
                <span>MUSIC</span>
              </Link>
          </section>
          <section className='home-photodump'>
            <div className='home-photodump-flex'>
              <div className='photodump-pic'>
                <img className='photodump-pic-img' src={Photo1} alt='Photo1.jpg'/>
                <p className='photodump-pic-name'>Photo_1.jpg</p>
              </div>
              <div className='photodump-pic'>
                <img className='photodump-pic-img' src={Photo2} alt='Photo2.jpg'/>
                <p className='photodump-pic-name'>Photo_2.jpg</p>
              </div>
              <div className='photodump-pic'>
                <img className='photodump-pic-img' src={Photo3} alt='Photo3.jpg'/>
                <p className='photodump-pic-name'>Photo_3.jpg</p>
              </div>
              <div className='photodump-pic'>
                <img className='photodump-pic-img' src={Photo4} alt='Photo4.jpg'/>
                <p className='photodump-pic-name'>Photo_4.jpg</p>
              </div>
            </div>
          </section>
          
      </div>
    )
  }
