import "./ConfermaRegistrazione.css"

export function ConfermaRegistrazione (props) {

    return (props.trigger) ? (
        <div className='PopupConfermaRegistrazione'>

            <div className='PopupContenuto'>
                <button className='buttonChiusuraPopup' onClick={() => props.setTrigger(false)}> X </button>
                {props.children}
            </div>
        </div>
    ) : "";
}


