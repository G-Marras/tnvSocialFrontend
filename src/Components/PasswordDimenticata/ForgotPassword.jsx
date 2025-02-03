import {useState} from 'react'
import "./ForgotPassword.css"
import {Outlet} from "react-router-dom";

export const ForgotPassword = () => {

    const [email, setEmail] = useState("")

    function mailChange(event){
        setEmail(event.target.value)
    }

    //da fare controllo se mail presente nel database per poi mandare la mail per reimpostare la password

    return (
        <form className='container'>
            <div className='header'>
                <div className='text'>Password Dimenticata?</div>
                <div className='underline'></div>
            </div>
            <div className="inputs"></div>
            <div className="input">
                <input type="email" placeholder="Mail" onChange={mailChange} value={email}/>
            </div>
            <div className="submit-container">
                <button className="submit">Conferma</button>
            </div>
            <Outlet />
        </form>
    )
}
