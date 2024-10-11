
import React from 'react'
import './Hero.jsx'
import profile from '../../assets/profile.png'
import './Hero.css'


const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile} width={400} />
      <h1><span>I am Aiza Nadeem </span>, Frontend Developer</h1>
      <div className='hero-action'>
        <div className="hero-connect">Connect with me</div>
        <div className='hero-resume'>My Resume</div>
      </div>
    </div>
  )
}

export default Hero
