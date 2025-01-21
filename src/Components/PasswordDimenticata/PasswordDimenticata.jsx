import React from 'react'
import "./PasswordDimenticata.css"

export const PasswordDimenticata = () => {
    return (
        <form className='container'>
            <div className='header'>
                <div className='text'>Password Dimenticata?</div>
                <div className='underline'></div>
            </div>
            <div className="inputs"></div>
            <div className="input">
                <input type="email" placeholder="Mail"/>
            </div>
            <div className="submit-container">
                <button className="submit">Conferma</button>
            </div>
        </form>
    )
}
