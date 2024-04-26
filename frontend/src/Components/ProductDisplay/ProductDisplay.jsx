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
            UNE PLANCHE POLYVALENTE ET IDÉALE POUR SE DÉPLACER EN VILLE OU POUR DES BALADES DÉCONTRACTÉES. PARFAITEMENT ADAPTÉE POUR LES DÉBUTANTS.
            </div>
            <div className="productdisplay-right-size">
                <h1>TAILLE</h1>
                <div className="productdisplay-right-sizes">
                    <div>8.5</div>
                    <div>8.75</div>
                    <div>9</div>
                    <div>9.25</div>
                    <div>9.5</div>
                    <div>9.75</div>
                    <div>10</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>AJOUTER AU PANIER</button>
            <p className="productdisplay-right-category" ><span>CATÉGORIE :</span> CRUISER</p>
            <p className="productdisplay-right-category" ><span>TAGS :</span> CRUISER</p>
        </div>

    </div>
  )
}

export default ProductDisplay