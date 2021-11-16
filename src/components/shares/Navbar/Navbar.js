import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineDown } from 'react-icons/ai'


const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="img">
      <div className="nav-img">
      </div>
    <div className="nav-title-img"></div>
    </div>
        <div className="nav-links">
          <div className="nav-link">
        <Link to="/" className="inner-link">Product<AiOutlineDown /></Link>
        <Link to="/" className="inner-link">Features<AiOutlineDown/></Link>
        <Link to="/" className="inner-link">Pricing</Link>
        <Link to="/" className="inner-link">Blog<AiOutlineDown /></Link>
        <Link to="/" className="inner-link">Support<AiOutlineDown /></Link>
          </div>
      </div>
      <div class="nav-sign">
        <span className="icon-log"><AiOutlineSearch /></span>
      <Link to="/" className="log">Log In</Link>
      <Link to="/" className="sign">Sign Up</Link>
      </div>
    </div>
  )
}

export default Navbar
