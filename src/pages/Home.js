import React from 'react'
import Navbar from '../components/shares/Navbar/Navbar'
import Banner from '../components/pages/Home/Banner'
import Companies from '../components/pages/Home/Companies'

const Home = () => {
  return (
    <div className="homepage">
  <Navbar /> 
  <Banner />  
  <Companies />
    </div>

  )
}

export default Home
