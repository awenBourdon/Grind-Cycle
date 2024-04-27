import React from 'react'
import "./Hero.css"
import hero_image from "../Assets/hero_image.png"

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>GRIND CYCLE</h2>
            <div>
                <div className="hand-hand-icon">
                    <p>La référence</p>
                    
                </div>
                <p>du skate</p>
                <p>en ligne</p>
            </div>
            <div className="hero-latest-btn">
                <div>DÉCOUVRIR</div>
                
            </div>
        </div>
        <div className="hero-right">
        <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero