import React from "react";
// import { Outlet, Link } from 'react-router-dom';
import backgroundImage from "../../assets/BckHeroPage2.jpg";
import { useNavigate } from "react-router-dom";
// import { Button, TextInput, Title, text } from "@mantine/core";
// import { IconAlertCircle } from "@tabler/icons-react";
// import { useState } from "react";
import classes from "./HeroPage.module.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

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

  const buttons = [
    { label: "PŘIHLÁSIT SE", onClick: () => navigate("/Loggedin") },
    { label: "REGISTROVAT SE", onClick: () => navigate("/Register") },
  ]

  return (
    <>
    <Header />
     <Header buttons={buttons} />
       <div style={backgroundStyle}>
        <Outlet />
       </div>
       <Footer />

      {/* <div>
        <nav className={classes.navbar}>
        <button onClick={() => navigate("/Loggedin")}
        className={classes.navButton}>PŘIHLÁSIT SE</button>
         <button onClick={() => navigate("/Register")}
        className={classes.navButton}>REGISTROVAT SE</button>
        </nav>  
        {/* <Outlet /> 
      </div>

      <div style={backgroundStyle}>
         <h1 style={{color: "white", textAlign: "center", paddingTop: "20%"}}>
        </h1>
        </div>  */}
    </>
  )
}

export default HeroPage;