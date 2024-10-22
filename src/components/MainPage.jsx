import React from "react";
import { Outlet, Link } from 'react-router-dom';
import backgroundImage from "../assets/BckMainPage2.jpg";
import { useNavigate } from "react-router-dom";

// import { Button, TextInput, Title, text } from "@mantine/core";
// import { IconAlertCircle } from "@tabler/icons-react";
// import { useState } from "react";
import '../app.css'

export function MainPage() {
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

  const handleEditDream = () => {
    navigate("/EditDream")
  }
  const handleOverview = () => {
    navigate("/OverviewOfDreams")
  }
  const handleLogOut = () => {
    navigate("/LoggedOut")
  }
  
  return (
    <>
      <div> 
         <h1>Main page</h1>
         <button onClick={handleEditDream}>Vložit sen</button>
         <button onClick={handleOverview}>Přehled snů</button>
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

export default MainPage;