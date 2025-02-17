import './App.css'
import HomePage from "./Components/HomePage/HomePage.jsx";
import {Outlet} from "react-router-dom";

function App() {


    return (
        <div>
            <Outlet />
        </div>
    )
}

export default App

