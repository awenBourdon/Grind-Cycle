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
            <p>GRIND CYCLE</p>
        </div>
        <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration:"none", color:"#272727"}} to="/">HOME</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("skate")}}><Link style={{ textDecoration:"none", color:"#272727"}} to="/skate">SKATE</Link>{menu==="skate"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("cruiser")}}><Link style={{ textDecoration:"none", color:"#272727"}} to="/cruiser">CRUISER</Link>{menu==="cruiser"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("shoes")}}><Link style={{ textDecoration:"none", color:"#272727"}} to="/shoes">SHOES</Link>{menu==="shoes"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("cart")}}><Link  style={{ textDecoration:"none", color:"#272727"}} to="/cart">PANIER ({getTotalCartItems()})</Link></li>
            <div className="nav-login-cart">
           <Link to="/login"><button>MON COMPTE</button></Link> 
          
        </div>
        </ul>
        
    </div>
  )
}

export default Navbar