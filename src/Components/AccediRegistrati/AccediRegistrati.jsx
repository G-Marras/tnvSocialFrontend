import {useState} from "react";
import './AccediRegistrati.css'

export function AccediRegistrati() {

    const [action, setAction] = useState("Registrati");
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [messagEmail, setMessageEmail] = useState("")

    const onLogin = (event) => {
        event.preventDefault()
        if (action === "Accedi") {
            handleValidationMail(email)
            handleValidationPassword(password)
        } else {
            setAction("Accedi")
        }
    }
    const onRegistration = (event) => {
        event.preventDefault()
        if (action === "Registrati") {
            handleValidationMail(email)
            handleValidationPassword(password)
        } else {
            setAction("Registrati")
        }
    }

    const handleValidationPassword = () => {
        const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
        console.log(regExp.test(password))
        if (password === "") {
            setMessage("Password mancante")
        } else {
            if (regExp.test(password)) {
                setMessage("Password valida")
            } else {
                setMessage("Password non valida")
                setPassword("")
            }
        }

    }

    const handleValidationMail = () => {
        const regExm = /[a-zA-Z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,8}(.[a-z]{2,8})?/g
        if (email === "") {
            setMessageEmail("Email mancante")
        } else {
            if (regExm.test(email)) {
                setMessageEmail("Email valida")
            } else {
                setMessageEmail("Email non valida")
                setEmail("")
            }
        }
    }

    function mailChange(event) {
        setEmail(event.target.value)
    }

    function passwordChange(valid) {
        setPassword(valid.target.value)
    }


    return (
        <form className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className="inputs"></div>

            <div className="input">
                <input type="email" placeholder="Mail" onChange={mailChange} value={email}/>
            </div>
            <p>{messagEmail}</p>
            <div className="input">
                <input type="password" placeholder="Password" onChange={passwordChange} value={password}/>
            </div>
            <p>{message}</p>
            {action === "Registrati" ? <div className="vuoto">ciao :)</div> :
                <div className="forgot-password"><span>Password dimenticata?</span></div>}
            <div className="submit-container">
                <button className={action === "Accedi" ? "submit gray" : "submit"} onClick={onRegistration}>Registrati
                </button>
                <button className={action === "Registrati" ? "submit gray" : "submit"} onClick={onLogin}>Accedi</button>
            </div>
        </form>
    )
}

