import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import  { MantineProvider } from "@mantine/core";
import { BrowserRouter } from 'react-router-dom';
import '@mantine/core/styles.css';
import { DatesProvider } from "@mantine/dates";
import { App } from './app.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MantineProvider
    withGlobalStyles
    withNormalizeCSS>
        <DatesProvider>
          <StrictMode>
            <BrowserRouter>
              <App />
            </BrowserRouter>             
          </StrictMode>
        </DatesProvider>
    </MantineProvider>, 
);
