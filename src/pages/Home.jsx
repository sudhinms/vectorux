import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import HomeBody from '../components/HomeBody'
import HomeBody2 from '../components/HomeBody2'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <HomeBody/>
      <HomeBody2 />
      <Footer/>
    </div>
  )
}

export default Home
