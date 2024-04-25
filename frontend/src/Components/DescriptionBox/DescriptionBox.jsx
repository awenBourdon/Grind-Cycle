import React from 'react'
import"./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">DESCRIPTION</div>
            <div className="descriptionbox-nav-box fade">AVIS (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>DÉCOUVRE NOTRE COLLECTION DE CRUISERS UNIQUES, OÙ LE SKATEBOARD RENCONTRE LA DURABILITÉ. REJOINS-NOUS DANS NOTRE ENGAGEMENT EN FAVEUR DE LA PLANÈTE TOUT EN LA RIDEANT.</p>
        </div>
    </div>
  )
}

export default DescriptionBox