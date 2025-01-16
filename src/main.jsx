import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import HomePage from "./Components/HomePage/HomePage.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='mainbody'>
        <HomePage />
    </div>


  </StrictMode>,
)
