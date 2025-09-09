import React from 'react'
import Hero from '../component/Hero'
import About from '../component/About'
import Pricing from '../component/Pricing'
import Service from '../component/Service'
import Contact from '../component/Contact'

const Home = () => {
  return (
    <>
    <Hero/>
    <Service/>
    <About/>
    <Pricing/>
    <Contact/>
    </>
  )
}

export default Home