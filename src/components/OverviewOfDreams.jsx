import React from "react";
import { Outlet, Link } from 'react-router-dom';
import backgroundImage from "../assets/BckOverview.jpg";
import { useNavigate } from "react-router-dom";

// import { Button, TextInput, Title, text } from "@mantine/core";
// import { IconAlertCircle } from "@tabler/icons-react";
// import { useState } from "react";
import '../app.css'


export function OverviewOfDreams() {
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

  const handleMainPage = () => {
    navigate("/MainPage")
  }
  const handleEditDream = () => {
    navigate("/EditDream")
  }
  const handleLogOut = () => {
    navigate("/LoggedOut")
  }
  
  return (
    <>
      <div>
        <h1>Přehled snů</h1>
         <button onClick={handleMainPage}>Hlavní stránka</button>
         <button onClick={handleEditDream}>Vložit sen</button>
         <button onClick={handleLogOut}>Odhlásit se</button>
        <Outlet />
      </div>
      <div style={backgroundStyle}>
         <h1 style={{color: "white", textAlign: "center", paddingTop: "20%"}}>
        </h1>
        </div> 
    </>
  )
}

export default OverviewOfDreams;