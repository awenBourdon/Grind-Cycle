import React, { useState } from 'react'
import "./CSS/LoginSignUp.css"

const LoginSignUp = () => {

const [state,setState] = useState("SE CONNECTER");
const [formData, setFormData] = useState({
  username:"",
  password:"",
  email:""
})

const changeHandler = (e) => {
  setFormData({...formData,[e.target.name]:e.target.value})
}

const login = async () => {
  console.log("Login Function Executed", formData);
  try {
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json", // Correction de la valeur de l'en-tête
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const responseData = await response.json();
    
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  } catch (error) {
    console.error("Error during login:", error);
    alert("An error occurred during login. Please try again later.");
  }
};

const signup = async() => {
  console.log("Signup Function Executed",formData);
  let responseData;
  await fetch("http://localhost:4000/signup", {
    method:"POST",
    headers:{
    Accept:"application/form-data",
    "Content-Type":"application/json",
  },
  body: JSON.stringify(formData),
  }).then((response)=> response.json())
  .then((data)=>responseData=data)

  if(responseData.success) {
    localStorage.setItem("auth-token", responseData.token);
    window.location.replace("/");
  } else {
    alert(responseData.errors)
  }
}

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "S'INSCRIRE"?<input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="IDENTIFIANT"/>:<></>}
          <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="ADRESSE EMAIL"/>
          <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="MOT DE PASSE"/>
        </div>
        

        {state==="S'INSCRIRE"
        ?<p className="loginsignup-login">TU AS DÉJÀ UN COMPTE ?<span onClick={()=>{setState("SE CONNECTER")}}> SE CONNECTER</span></p>
        :<p className="loginsignup-login">CRÉER UN COMPTE<span onClick={()=>{setState("S'INSCRIRE")}}> EN CLIQUANT ICI</span></p>}
        
        {state === "S'INSCRIRE" &&
        <div className="loginsignup-agree">
        <input type="checkbox" name="" id="" />
         <p>JE CONFIRME AVOIR LU, COMPRIS ET ACCEPTÉ <b>LES CONDITIONS D'UTILISATIONS ET LA POLITIQUE DE CONFIDENTIALITÉS.</b></p>
         </div>}
        <button onClick={()=>{state==="SE CONNECTER"?login():signup()}}>CONTINUER</button>
      </div>
    </div>
  )
}

export default LoginSignUp