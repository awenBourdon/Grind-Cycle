import React from 'react'
import "./Offers.css"
import exclusive_image from "../Assets/exclusive_image.png"

const Offers = () => {
  return (
    <div className="offers">
        <div className="offers-left">
            <h1>EXCLUSIVITÉ</h1>
            <h1>SEULEMENT POUR VOUS</h1>
            <p>UNIQUEMENT SUR LES MEILLEURES VENTES</p>
            <button>CLIQUEZ ICI</button>

        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers