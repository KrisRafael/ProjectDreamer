import React from "react";
// import { Button, TextInput, Title, text } from "@mantine/core";
// import { Calendar } from "@mantine/dates";
// import { IconAlertCircle } from "@tabler/icons-react";
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { useForm } from "@mantine/form";
import { useState } from "react";
import "./App.css"

import HeroPage from "./components/HeroPage.jsx";
import MainPage from "./components/MainPage.jsx";
import Loggedin from "./components/Loggedin.jsx";
import Register from "./components/Register.jsx"
import EditDream from "./components/EditDream.jsx";
import OverviewOfDreams from "./components/OverviewOfDreams.jsx";

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
      <div>

        <Outlet />
      </div>
    {/* <Storage /> */}
             <div>
             <Routes>
                <Route path="/" element={<HeroPage />} />
                <Route path="/MainPage" element={<MainPage />} />
                <Route path="/Loggedin" element={<Loggedin />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/EditDream" element={<EditDream />} />
                <Route path="/OverviewOfDreams" element={<OverviewOfDreams />} />
              </Routes>
             </div>   

          <div className="App">
            <footer className="footer">
             <p style={{fontWeight: "bold", fontSize: "13px", color: "dodgerblue", marginLeft: "25px"}}>© 2024 Copyright by Kris</p>
            </footer>
          </div>
    </>
  )
}

export default App;