import React from "react";
import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import backgroundImage from "../../assets/BckRegister.jpg";
// import { Button, TextInput, Title, text } from "@mantine/core";
// import { IconAlertCircle } from "@tabler/icons-react";
// import { useState } from "react";
import classes from "./Register.module.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";


export function Register() {
  const navigate = useNavigate()

  const backgroundStyle = {
    height: "100vh",
    width: "100vw",
    backgroundSize:"cover",
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1
  }

  const handleRegister = () => {
    navigate("/MainPage")
  }
  
  return (
    <>
    <Header />
    <div>
        <h1>ZALOŽTE SI ÚČET</h1>
          <h2>OSOBNÍ ÚDAJE</h2>
          <button onClick={handleRegister}>Vytvořit účet</button>
        <Outlet />
    </div>   
       <div style={backgroundStyle}>
         <h1 style={{color: "white", textAlign: "center", paddingTop: "20%"}}>
         </h1>
       </div> 
       <Footer />
    </>
  )
}

export default Register;