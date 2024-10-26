import React from "react";
// import { Outlet, Link } from 'react-router-dom';
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
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1
  }

  return (
    <>
      <div>
       <header className="header">
        <p style={{fontWeight: "bold", fontSize: "30px", color: "dodgerblue"}}>Dreamer</p>
        <nav className="navbar">
        <button onClick={() => navigate("/Loggedin")}
        className="nav-button">Přihlásit se</button>
         <button onClick={() => navigate("/Register")}
        className="nav-button">Registrovat se</button>
        </nav>  
        {/* <Outlet /> */}
        </header>
      </div>

      <div style={backgroundStyle}>
         <h1 style={{color: "white", textAlign: "center", paddingTop: "20%"}}>
        </h1>
        </div> 
    </>
  )
}

export default HeroPage;