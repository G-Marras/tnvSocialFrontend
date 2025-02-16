import React from "react";
import { useState } from "react";
import './ButtonCreationPost.css'

import PostCreation from "../PostCreation/PostCreation.jsx";
import PopupPostCreate from "../PopupPostCreation/PopupCreatePost.jsx";


function ButtonCreationPost() {
    const [buttonPopup, setButtonPopup] = React.useState(false);

    return (
        <div>
            <button className='buttonCreazionePost' onClick={() => setButtonPopup(true)}>Creazione Post</button>
            <PopupPostCreate trigger={buttonPopup} setTrigger={setButtonPopup} >
                <PostCreation/>
            </PopupPostCreate>
        </div>

    )
}

export default ButtonCreationPost;