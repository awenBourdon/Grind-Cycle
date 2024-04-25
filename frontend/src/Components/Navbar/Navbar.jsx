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
            <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration:"none", color:"#111111"}} to="/">SHOP</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration:"none", color:"#111111"}} to="/mens">MEN</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration:"none", color:"#111111"}} to="/womens">WOMEN</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration:"none", color:"#111111"}} to="/kids">KIDS</Link>{menu==="kids"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("cart")}}><Link  style={{ textDecoration:"none", color:"#111111", border:"2px solid #111111", padding:'10px'}} to="/cart">PANIER ({getTotalCartItems()})</Link></li>
        </ul>
        <div className="nav-login-cart">
           <Link to="/login"><button>MON COMPTE</button></Link> 
          
        </div>
    </div>
  )
}

export default Navbar