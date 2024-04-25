import React, { useEffect, useState } from 'react'
import "./ListProduct.css"
import cross_icon from "../../assets/cross_icon.svg"

const ListProduct = () => {

    const [allproducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
      await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {setAllProducts(data)});
    }

    useEffect(() => {
      fetchInfo();
    },[])

const remove_product = async (id) =>{
  await fetch('http://localhost:4000/removeproduct', {
    method:"POST",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json",
    },
    body:JSON.stringify({id:id})
  })
  await fetchInfo();
}

  return (
    <div className="list-product">
      <h1>Tous les produits</h1>
      <div className="listproduct-format-main">
        <p>Produits</p>
        <p>Nom</p>
        <p>Prix Initial</p>
        <p>Nouveau Prix</p>
        <p>Catégorie</p>
        <p>Supprimer</p>
      </div>
      <div className="listproduct_allproducts">
        {allproducts.map((product,index)=>{
          return <>
              <hr/>
              <div key={index} className="listproduct-format-main listproduct-format">
              <img src={product.image} alt="" className="listproduct-product-icon" />
              <p>{product.name}</p>
              <p>{product.old_price}€</p>
              <p>{product.new_price}€</p>
              <p>{product.category}</p>
              <img onClick={()=>{remove_product(product.id)}} className="listproduct-remove-icon" src={cross_icon} alt="" />
          </div>
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct
