import React from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import backgroundImage from "../../assets/BckEditDream.jpg";
// import LoggedOut from "./LoggedOut";
// import { Button, TextInput, Title, text } from "@mantine/core";
// import { IconAlertCircle } from "@tabler/icons-react";
import { useState } from "react";
import classes from "./EditDream.module.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";


export function EditDream() {
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
    { label: "PŘEHLED SNŮ", onClick: () => navigate("/OverviewOfDreams") },
    { label: "ODHLÁSIT SE", onClick: () => navigate("/") },
  ]

  return (
    <>
    <Header />
     <Header buttons={buttons} />
       <div style={backgroundStyle}>
         <h1>VLOŽIT SEN</h1>
        <Outlet />
      </div>
      <Footer />

     {/* <div>
      <nav className={classes.navbar}>
        <button onClick={() => navigate("/MainPage")}
        className={classes.navButton}>HLAVNÍ STRÁNKA</button>
         <button onClick={() => navigate("/OverviewOfDreams")}
        className={classes.navButton}>PŘEHLED SNŮ</button>
          <button onClick={() => navigate("/")}
        className={classes.navButton}>ODHLÁSIT SE</button>
        </nav>  

      <h1>Vložit sen</h1>
     <Outlet />
   </div>
   <div style={backgroundStyle}>
      <h1 style={{color: "white", textAlign: "center", paddingTop: "20%"}}>
     </h1>
     </div>   */}
    </>
  )
}

export default EditDream;
