import "./Navbar.css";
import React, { useContext, useRef, useState } from "react";
// import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from"../Assets/nav_dropdown.png"

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');

    }

  return (
    <div className="navbar">
        <div className="nav-logo">
            {/* <img src={logo} alt=""/> */}
            <p onClick={()=>{setMenu("shop")}}> <Link style={{ textDecoration:"none", color:"#272727"}} to="/">GRIND CYCLE</Link></p>
        </div>
        <img  className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration:"none", color:"#272727"}} to="/">Accueil</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("skate")}}><Link style={{ textDecoration:"none", color:"#272727"}} to="/skate">Skate</Link>{menu==="skate"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("cruiser")}}><Link style={{ textDecoration:"none", color:"#272727"}} to="/cruiser">Cruiser</Link>{menu==="cruiser"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("shoes")}}><Link style={{ textDecoration:"none", color:"#272727"}} to="/shoes">Shoes</Link>{menu==="shoes"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("cart")}}><Link  style={{ textDecoration:"none", color:"#272727"}} to="/cart">Panier ({getTotalCartItems()})</Link>{menu==="cart"?<hr/>:<></>}</li>
            <div className="nav-login-cart">
            {localStorage.getItem('auth-token') ? (
  <button onClick={() => {localStorage.removeItem("auth-token"); window.location.replace("/");}}>Se déconnecter</button>
) : (
  <Link to="/login"><button>Mon Compte</button></Link>
)}
           </div>
           </ul>
        
      </div>
  )
}

export default Navbar