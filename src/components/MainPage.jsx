import React from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import backgroundImage from "../assets/BckMainPage2.jpg";
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
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1
  }

  return (
    <>
    <div> 
      <header className="header">
        <div className="circle-container">
          <div className="circle">
           <h1>DREAMER</h1>
           {/* <p>Create your dream</p> */}
        </div>
    </div>
         {/* <p style={{fontWeight: "bold", fontSize: "30px", color: "dodgerblue"}}>Dreamer</p> */}
      <nav className="navbar">
        <button onClick={() => navigate("/EditDream")}
         className="nav-button">VLOŽIT SEN</button>
        <button onClick={() => navigate("/OverviewOfDreams")}
         className="nav-button">PŘEHLED SNŮ</button>
        <button onClick={() => navigate("/")}
         className="nav-button">ODHLÁSIT SE</button>     
      </nav>  
      </header>
         <h1>Main page</h1>
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