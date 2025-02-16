import React from 'react'
import './PopupCreatePost.css'

function PopupPostCreate(props) {

    return (props.trigger) ? (
        <div className='PopupPostCreate'>

            <div className='PopupBody'>
                <button className='buttonClosingPopup' onClick={() => props.setTrigger(false)}> X </button>
                {props.children}
            </div>
        </div>
    ) : "";
}
export default PopupPostCreate;