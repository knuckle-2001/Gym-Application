import React from 'react'
import './Hero.css'
import Header from './Header/Header'
import hero_image from "../assets/hero_image.png"
import hero_image_back from "../assets/hero_image_back.png"
import Heart from "../assets/heart.png"
import Calories from "../assets/calories.png"

const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
          <Header/>

          {/* The best ad */}
          <div className="the-best-ad">
            <div></div>
            <span>Your best fitness buddy</span>
          </div>

          {/* The text part below best ad */}
          <div className="hero-text">
            <div>
              <span className='stroke-text'>Shape </span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal </span>
              <span className='stroke-text'>Body</span>
            </div>
            <div>
              <span>Build your fitness and feel the magic </span>
            </div>
          </div>

          {/* Figures */}
          <div className="figures">
          <div>
            <span>150+ </span>
            <span>certified trainers</span>
          </div>
          <div>
            <span>2000+ </span>
            <span>gymx members</span>
          </div>
          <div>
            <span>40+ </span>
            <span>centres across the city</span>
          </div>
          </div>

          {/* Hero buttons */}

          <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>

          </div>


          
          
        </div>
        <div className="right-h">
          <button className='btn'>Join Now</button>
          <div className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </div>

          {/* Hero images */}
          <img src={hero_image} alt="" className='hero-image' />
          <img src={hero_image_back} alt="" className='hero-image-back' />

          {/* Calories */}
          <div className="calories">
            <img src={Calories} alt="" />
            <div>
            <span>Calories Burnt</span>
            <span>220 kcal</span>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Hero