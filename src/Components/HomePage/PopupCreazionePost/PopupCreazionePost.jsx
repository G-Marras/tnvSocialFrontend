import React from 'react'
import './PopupCreazionePost.css'

function PopupCreazionePost(props) {

    return (props.trigger) ? (
        <div className='PopupCreazionePost'>

            <div className='PopupContenuto'>
                <button className='buttonChiusuraPopup' onClick={() => props.setTrigger(false)}> X </button>
                {props.children}
            </div>
        </div>
    ) : "";
}
export default PopupCreazionePost;