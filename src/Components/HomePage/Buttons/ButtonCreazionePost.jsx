import React from "react";
import { useState } from "react";
import './ButtonCreazionePost.css'
import PopupCreazionePost from "../PopupCreazionePost/PopupCreazionePost.jsx";
import CreazionePost from "../CreazionePost/CreazionePost.jsx";


function ButtonCreazionePost() {
    const [buttonPopup, setButtonPopup] = React.useState(false);

    return (
        <div>
            <button className='buttonCreazionePost' onClick={() => setButtonPopup(true)}>Creazione Post</button>
            <PopupCreazionePost trigger={buttonPopup} setTrigger={setButtonPopup} >
                <CreazionePost  />
            </PopupCreazionePost>
        </div>

    )
}

export default ButtonCreazionePost;