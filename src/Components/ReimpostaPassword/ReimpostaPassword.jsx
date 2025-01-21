import {useState} from 'React'
import "./ReimpostaPassword.css"

export const ReimpostaPassword = () => {
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Reimposta Password</div>
                <div className='underline'></div>
            </div>
            <div className="inputs"></div>
            <div className="input">
                <input type="password" placeholder="Password"/>
            </div>
            <div className="input">
                <input type="password" placeholder="Conferma Password"/>
            </div>
            <div className="submit-container">
                <div className="submit">Reimposta</div>
            </div>
        </div>
    )
}