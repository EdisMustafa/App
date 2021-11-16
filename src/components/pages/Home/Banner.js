import React from 'react'
import {Link} from 'react-router-dom'
import './styles/banner.scss'

const Banner = () => {
  return (
    <div className="home">
        <div className="home-1">
        <div className="home-title">
          <h1>Browse Privately.</h1>
          <h1>Explore Freely.</h1>
        </div>
        <div className="home-dsp">
          <p className="home-dsp-1">
            Defend yourself against tracking and surveillance.
            Circumvent </p>
            <p>censorship.</p>
        </div>
      </div>
      <div className="img-1"></div>
      <div className="home-btn">
        <div className="get">
        <Link to="/" className="get-btn">Get Started</Link>
        </div>
        <div className="learn">
        <Link to="/" className="learn-btn" >Learn More</Link>
        </div>
      </div>
    </div>
  )
}

export default Banner 
