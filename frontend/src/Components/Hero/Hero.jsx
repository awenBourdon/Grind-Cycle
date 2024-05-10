import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <div>
                <div className="hand-hand-icon">
                    <p>LA RÉFÉRENCE</p>
                    
                </div>
                <p>DU SKATE EN LIGNE</p>
            </div>
            <div className="hero-latest-btn">
                <Link style={{ textDecoration:"none", color:"#ff3c00", fontWeight:"500"}} to="/skate"><div>Découvrir</div></Link>
            </div>
        </div>
    </div>
  )
}

export default Hero