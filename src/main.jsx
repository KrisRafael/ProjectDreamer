import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import {AuthProvider} from "./context/AuthContext.jsx";

import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';

import { MantineProvider } from "@mantine/core";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthRoute } from "./components/AuthRoute/AuthRoute.jsx";

import App from "./App.jsx";
import HeroPage from "./components/HeroPage/HeroPage.jsx";
import MainPage from "./components/MainPage/MainPage.jsx";
import EditDream from "./components/EditDream/EditDream.jsx";
import OverviewOfDreams from "./components/OverviewOfDreams/OverviewOfDreams.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";

createRoot(document.getElementById('root')).render(
<StrictMode>
 <AuthProvider>
  <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HeroPage />} />

            <Route element={<AuthRoute />}>
             <Route path="MainPage" element={<MainPage />} />
             <Route path="OverviewOfDreams" element={<OverviewOfDreams />} />
             <Route path="EditDream" element={<EditDream />} />
            </Route>

            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </AuthProvider>
</StrictMode>,
)
