import React, {useContext} from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'


const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
        <div className="productdisplay-img">
            <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>

        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">{product.old_price}€</div>
                <div className="productdisplay-right-price-new">{product.new_price}€</div>
            </div>
            <div className="productdisplay-right-description">
            Découvrez une sélection pointue de planches, d'accessoires et de vêtements, tout en vous imprégnant de l'atmosphère décontractée et passionnée qui règne dans notre magasin. Rejoignez une communauté de skateurs passionnés et vivez pleinement votre passion pour le skateboard avec nous !
            </div>
            <div className="productdisplay-right-size">
                <h1>TAILLE</h1>
                <div className="productdisplay-right-sizes">
                    <div>XS</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>AJOUTER AU PANIER</button>
            <p className="productdisplay-right-category" ><span>Catégorie :</span> CRUISER, SKATE, SHOES</p>
            <p className="productdisplay-right-category" ><span>Tags :</span> CRUISER, SKATE, SHOES</p>
        </div>

    </div>
  )
}

export default ProductDisplay