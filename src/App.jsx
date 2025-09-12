import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import RightNavbar from './components/RightNavbar'
// import Showreel from './components/Showreel'
import Testimonals from './components/Testimonals'
import About from './components/About'
import Footer from './components/Footer'
import VoiceSection from './components/VoiceSection'
import PricingSection from './components/PricingSection'

function App() {


  return (
    <div>
      <RightNavbar/>
      <Hero/>
      {/* <Showreel/> */}
      <About/>
      <VoiceSection/>
      <Testimonals/>
      <PricingSection/>
      <Footer/>
    </div>
  )
}

export default App
