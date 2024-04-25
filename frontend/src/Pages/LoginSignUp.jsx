import React from 'react'
import "./CSS/LoginSignUp.css"

const LoginSignUp = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>S'INSCRIRE</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="IDENTIFIANT"/>
          <input type="email" placeholder="ADRESSE EMAIL"/>
          <input type="password" placeholder="MOT DE PASSE"/>
        </div>
        <button>CONTINUER</button>
        <p className="loginsignup-login">TU AS DÉJÀ UN COMPTE ?
        <span> SE CONNECTER</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>JE CONFIRME AVOIR LU, COMPRIS ET ACCEPTÉ <b>LES CONDITIONS D'UTILISATIONS ET 
                LA POLITIQUE DE CONFIDENTIALITÉS.</b></p>
        </div>
      </div>

    </div>
  )
}

export default LoginSignUp