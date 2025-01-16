import React, {useState} from "react";
import './AccediRegistrati.css'

export const AccediRegistrati = () => {

    const [action,setAction] = useState("Registrati");

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className="inputs"></div>
            <div className="input">
                <input type="email" placeholder="Mail"/>
            </div>
            <div className="input">
                <input type="password" placeholder="Password"/>
            </div>
            {action === "Registrati" ? <div className="vuoto">ciao :)</div> :
                <div className="forgot-password"><span>Password dimenticata?</span></div>}
            <div className="submit-container">
            <div className={action === "Accedi" ? "submit gray" : "submit"} onClick={()=>{setAction("Registrati")}}>Registrati</div>
                <div className={action === "Registrati" ? "submit gray" : "submit"} onClick={()=>{setAction("Accedi")}}>Accedi</div>
            </div>
        </div>
    )

}

