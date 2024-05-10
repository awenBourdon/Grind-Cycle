// footer.jsx

import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="container">
            <div className="left">
                <h1 className="logo">GRIND CYCLE</h1>
                <p className="desc">Rejoignez une communauté de skateurs passionnés et vivez pleinement votre passion pour le skateboard avec nous !</p>
            </div>
            <div className="center">
                <h3 className="title">Plan du site</h3>
                <ul className="list">
                    <li className="list-item">Accueil</li>
                    <li className="list-item">Panier</li>
                    <li className="list-item">Cruiser</li>
                    <li className="list-item">Skate</li>
                    <li className="list-item">Shoes</li>
                    <li className="list-item">Mon compte</li>
                    <li className="list-item">Mes commandes</li>
                    <li className="list-item">Ma wishlist</li>
                    <li className="list-item">Conditions générales</li>
                </ul>
            </div>
            <div className="right">
                <h3 className="title">Contact</h3>
                <div>17 rue Bruneau, 37912 Gilbertville</div>
                <div>07 63 72 56 22</div>
                <div>grind.cycle@gmail.com</div>
            </div>
        </div>
    );
};

export default Footer;
