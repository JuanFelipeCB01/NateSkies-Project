import React from 'react'
import { Link } from 'react-router-dom'

export default function ClipsPage() {
  return (
    <div className='clips'>
        <section className='clips-section1'>
            <h1 className='clips-section1-title'>VIDEOS</h1>
            <Link to='https://linktr.ee/nateskies' className='clips-section1-btn'>
             <span className='clips-section1-btn-text'>LISTEN & DOWNLOAD</span>
            </Link>
            <div className='clips-section1-clip'>
                <h2 className='clip-title'>billie ellish read my dms</h2>
                <iframe
                title='WHAT IS FEAR'
                height={250}
                width={500}
                frameBorder={0}
                src="https://www.youtube.com/embed/CiJZB9VE42U?si=kn-sEq-QIYvyG3H7"/>
            </div>
            <div className='clips-section1-clip'>
                <h2 className='clip-title'>WHAT IS FEAR?</h2>
                <iframe
                title='WHAT IS FEAR'
                height={250}
                width={500}
                frameBorder={0}
                src="https://www.youtube.com/embed/8bVJJ3yCvSk"/>
            </div>
        </section>
        <section className='clips-section2'>
            <div className='clips-section1-clip'>
                <h2 className='clip-title'>RUN.</h2>
                <iframe
                title='WHAT IS FEAR'
                height={250}
                width={500}
                frameBorder={0}
                src="https://www.youtube.com/embed/f3f_NRx457U?si=ka6RWIxpvHY-OjgH"/>
            </div>
            <div className='clips-section1-clip'>
                <h2 className='clip-title'>MAKE IT OUT!</h2>
                <iframe
                title='WHAT IS FEAR'
                height={250}
                width={500}
                frameBorder={0}
                src="https://www.youtube.com/embed/00QxEnZyWRA?si=Fh_h9V3FQS-LGPQ0"/>
            </div>
        </section>
    </div>
  )
}
