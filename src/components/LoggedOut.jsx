import React from "react";
import { Outlet} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/BckLogin.jpg";
// import { Button, TextInput, Title, text } from "@mantine/core";
// import { IconAlertCircle } from "@tabler/icons-react";
// import { useState } from "react";
// import '../app.css'


export function LoggedOut() {
  const navigate = useNavigate()

  const backgroundStyle = {
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  }

  const handleLogout = () => {
    navigate("/HeroPage")
  }
  
  return (
    <> 
       <div>
      <button onClick={handleLogout}>Log out</button>
        <Outlet />
      </div>  
      <div style={backgroundStyle}>
        <h1 style={{color: "white", textAlign: "center", paddingTop: "20%"}}>
        </h1>
        </div> 
    </>     
  )
}

export default LoggedOut;