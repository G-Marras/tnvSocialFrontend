import {createRoot} from "react-dom/client"
import { StrictMode } from 'react'

import './index.css'
import App from './App.jsx'
import HomePage from "./Components/HomePage/HomePage.jsx"



 createRoot(document.getElementById("root")).render(



    <StrictMode>
        <HomePage />

    </StrictMode>
)
