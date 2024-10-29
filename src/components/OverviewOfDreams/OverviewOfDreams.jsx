import React from "react";
import { Outlet, Link } from 'react-router-dom';
import backgroundImage from "../../assets/BckOverview.jpg";
import { useNavigate } from "react-router-dom";
// import { Button, TextInput, Title, text } from "@mantine/core";
// import { IconAlertCircle } from "@tabler/icons-react";
// import { useState } from "react";
import classes from "./Overview.module.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";


export function OverviewOfDreams() {
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

  const buttons = [
    { label: "HLAVNÍ STRÁNKA", onClick: () => navigate("/MainPage") },
    { label: "VLOŽIT SEN", onClick: () => navigate("/EditDream") },
    { label: "ODHLÁSIT SE", onClick: () => navigate("/") },
  ]

  return (
    <>
    <Header />
     <Header buttons={buttons} />
      <div style={backgroundStyle}>
        <h1>PŘEHLED SNŮ</h1>
        <Outlet />
      </div>
      <Footer />
    {/* <div>
      <nav className={classes.navbar}>
        <button onClick={() => navigate("/MainPage")}
        className={classes.navButton}>HLAVNÍ STRÁNKA</button>
         <button onClick={() => navigate("/EditDream")}
        className={classes.navButton}>VLOŽIT SEN</button>
          <button onClick={() => navigate("/")}
        className={classes.navButton}>ODHLÁSIT SE</button>
      </nav>  
      
         <h1>Přehled snů</h1>
         <Outlet />
    </div>
      <div style={backgroundStyle}>
         <h1 style={{color: "white", textAlign: "center", paddingTop: "20%"}}>
         </h1>
      </div>  */}
    </>
  )
}

export default OverviewOfDreams;