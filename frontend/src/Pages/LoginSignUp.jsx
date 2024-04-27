import React, { useState } from 'react'
import "./CSS/LoginSignUp.css"

const LoginSignUp = () => {

const [state,setState] = useState("Se connecter");
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
          {state === "S'inscrire"?<input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Pseudonyme"/>:<></>}
          <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Adresse email"/>
          <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Mot de passe"/>
        </div>
        

        {state==="S'inscrire"
        ?<p className="loginsignup-login">Tu as déjà un compte ?<span onClick={()=>{setState("Se connecter")}}> Se connecter</span></p>
        :<p className="loginsignup-login">Créer un compte<span onClick={()=>{setState("S'inscrire")}}> en cliquant ici</span></p>}
        
        {state === "S'inscrire" &&
        <div className="loginsignup-agree">
        <input type="checkbox" name="" id="" />
         <p>Je confirme avoir lu, compris et accepté les <b>conditions d'utilisation et la politique de confidentialité.</b></p>
         </div>}
        <button onClick={()=>{state==="SE CONNECTER"?login():signup()}}>Continuer</button>
      </div>
    </div>
  )
}

export default LoginSignUp