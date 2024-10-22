import React from "react";
import { Outlet, Link } from 'react-router-dom';
import backgroundImage from "../assets/BckHeroPage2.jpg";
import { useNavigate } from "react-router-dom";
// import { Button, TextInput, Title, text } from "@mantine/core";
// import { IconAlertCircle } from "@tabler/icons-react";
// import { useState } from "react";
import '../app.css'


export function HeroPage() {
  const navigate = useNavigate()

  const backgroundStyle = {
    height: "100vh",
    width: "100vw",
    backgroundSize:"cover",
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  }

  const handleLogin = () => {
    navigate("/Loggedin")
  }
  const handleRegister = () => {
    navigate("/Register")
  }
  
  return (
    <>
      <div>
         <button onClick={handleLogin}>Přihlásit se</button>
         <button onClick={handleRegister}>Registrovat se</button>
        <Outlet />
      </div>

      <div style={backgroundStyle}>
         <h1 style={{color: "white", textAlign: "center", paddingTop: "20%"}}>
        </h1>
        </div> 
    </>
  )
}

export default HeroPage;