import App from "./App";
import ReactDOM from "react-dom/client"
import React from "react"
import { BrowserRouter } from "react-router-dom";
import DataContextProvider from "./Components/DataContextProvider";
import ThemeContextProvider from "./Components/ThemeContextProvider";
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DataContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </DataContextProvider>
  </BrowserRouter>


)
