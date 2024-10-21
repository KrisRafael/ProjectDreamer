import React from "react";
// import { Button, TextInput, Title, text } from "@mantine/core";
// import { Calendar } from "@mantine/dates";
// import { IconAlertCircle } from "@tabler/icons-react";
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { useForm } from "@mantine/form";
import { useState } from "react";

import Layout from "./components/Layout.jsx";
import HeroPage from "./components/HeroPage.jsx";
import MainPage from "./components/MainPage.jsx";
import Loggedin from "./components/Loggedin.jsx";
import Register from "./components/Register.jsx"
import EditDream from "./components/EditDream.jsx";
import OverviewOfDreams from "./components/OverviewOfDreams.jsx";

// import './app.css'

// import { supabase } from "./Supabase.js";
// import Storage from "Storage";

export function App() {


  // const [editor, setEditor] = useState(null) // Supabase
  
  // useEffect(
  //   () =>{
  //     const getEditor = async () => {
  //       const { data, error} = await supabase
  //       .from("editor")
  //       .select("name", "description")
  //         .order("name")

  //       if (error !== null){
  //         console.log(error.message)
  //         return
  //       }

  //       setEditor(data)
  //     }
  //     getEditor()
  //   }, 
  //   []
  // )
 
  return (
    <>
    <header>
      <h1>Dreamer hero-page</h1>
      </header>
      <div>
        <nav>
          <Link to="/">Main Page</Link>
          <Link to="Loggedin">Přihlásit se</Link>
          <Link to="Register">Registrovat se</Link>
          <Link to="EditDream">Vložit sen</Link>
          <Link to="OverviewOfDreams">Přehled snů</Link>
          
        </nav>
        <Outlet />
      </div>
    {/* <Storage /> */}
             <div>
             <Routes>
                <Route path="/" element={<Layout />} />
                <Route index element={<HeroPage />} />
                <Route path="/MainPage" element={<MainPage />} />
                <Route path="/Loggedin" element={<Loggedin />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/EditDream" element={<EditDream />} />
                <Route path="/OverviewOfDreams" element={<OverviewOfDreams />} />
              </Routes>
             </div>      
    </>
  )
}

export default App;