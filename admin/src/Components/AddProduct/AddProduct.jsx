import React, { useState } from 'react'
import "./AddProduct.css"
import upload_area from "../../assets/upload_area.svg"

const AddProduct = () => {

    const [image,setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
      name:"",
      image:"",
      category:"cruiser",
      new_price:"",
      old_price:"",
    })

    const imageHandler = (e) => {
      setImage(e.target.files[0]);
    }

    const changeHandler = (e) => {
      setProductDetails({...productDetails, [e.target.name]:e.target.value})
    }

    const Add_Product = async () => {
      if (!productDetails.category) {
        alert("Veuillez sélectionner une catégorie pour le produit.");
        return;
      }
      let responseData;
      let product = productDetails;

      let formData = new FormData();
      formData.append('product', image);

      await fetch("http://localhost:4000/upload", {
        method:'POST',
        headers:{
          Accept:"application/json",
        },
        body:formData, 
      }).then((resp) => resp.json()).then((data) => {responseData=data})
      if(responseData.success) {
        product.image = responseData.image_url;
        console.log(product);
        await fetch("http://localhost:4000/addproduct", {
          method:"POST",
          headers:{
            Accept:"application/json",
            "Content-Type": "application/json"
          },
          body:JSON.stringify(product),
        }).then((resp) => resp.json()).then((data) =>
            data.success?alert("Produit ajouté"):alert("Erreur")
      )}
    }

  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Nom Produit</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="Nom du produit"/>
      </div>
      <div className="addproduct-price">
      <div className="addproduct-itemfield">
        <p>Prix Initial</p>
        <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder="Prix initial"/>
      </div>
      <div className="addproduct-itemfield">
        <p>Nouveau Prix</p>
        <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder="Nouveau prix"/>
      </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Catégorie Produit</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className="addproduct-selector" placeholder="Nouveau prix">
          <option value="cruiser">Cruiser</option>
          <option value="skate">Skate</option>
          <option value="shoes">Shoes</option>
        </select>
      </div>
      <div className="addproduct_itemfield">
        <label htmlFor="file-input">
          <img src={image?URL.createObjectURL(image):upload_area} className="addproduct_thumbnail-img" alt="" />
          <input onChange={imageHandler} type="file" name="image" id="file-input" hidden/>
        </label>
      </div>
      <button onClick={Add_Product} className="addproduct-btn">AJOUTER</button>
    </div>
  
  )
}

export default AddProduct