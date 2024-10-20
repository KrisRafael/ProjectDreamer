import React from "react";
import ReactDOM from "react-dom/client";
import  { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { App } from './app.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MantineProvider
    withGlobalStyles
    withNormalizeCSS>
        <DatesProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </DatesProvider>
    </MantineProvider>, 
);
