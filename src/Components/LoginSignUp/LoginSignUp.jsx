import {useState} from "react";
import './LoginSignUp.css'
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../../reducers/user.slices.js";

export function LoginSignUp() {

    const [action, setAction] = useState("Registrati");
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [messageEmail, setMessageEmail] = useState("")
    const [displayName, setDisplayName] = useState("")
    const [displaySurname, setDisplaySurname] = useState("")
    const [registrationMessage, setRegistrationMessage] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const onLogin = (event) => {
        event.preventDefault()
        if (action === "Accedi") {
            handleValidationMail(email)
            handleValidationPassword(password)
            if (handleValidationMail(email) === true && handleValidationPassword(password) === true){
                loginUser(event)
                navigate('/homepage')
            }
        }else {
            setAction("Accedi")
        }
    }
    const onRegistration = (event) => {
        event.preventDefault()
        if (action === "Registrati") {
            handleValidationMail(email)
            handleValidationPassword(password)
            if(handleValidationMail(email) === true && handleValidationPassword(password) === true) {
                 createUser()
            }
        } else {
            setAction("Registrati")
        }
    }

    const handleValidationPassword = () => {
        const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
        if (password === "") {
            setMessage("Password mancante")
            return false;
        } else {
            if (regExp.test(password)) {
                setMessage("Password valida")
                return true;
            } else {
                setMessage("Password non valida")
                setPassword("")
                return false;
            }
        }
    }

    const handleValidationMail = () => {
        const regExm = /[a-zA-Z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,8}(.[a-z]{2,8})?/g
        if (email === "") {
            setMessageEmail("Email mancante")
            return false;
        } else {
            if (regExm.test(email)) {
                setMessageEmail("Email valida")
                return true;
            } else {
                setMessageEmail("Email non valida")
                setEmail("")
                return false;
            }
        }
    }

    function mailChange(event) {
        setEmail(event.target.value)
    }

    function passwordChange(event) {
        setPassword(event.target.value)
    }

    function nameChange(event){
        setDisplayName(event.target.value)
    }

    function surnameChange(event){
        setDisplaySurname(event.target.value)
    }

    const createUser = async () => {
        try{
           const response = await fetch('http://localhost:8000/user',{
               method: 'POST',
               headers:{
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                   displayName:displayName,
                   displaySurname:displaySurname,
                   email:email,
                   password:password
               }),
            });
            const data = await response.json();
           if (response.ok){
               setRegistrationMessage("Registrazione effettuata con successo, controlla la mail per confermarla")
               return data
           }
        } catch (error){
            console.error('Error', error);
            setRegistrationMessage("errore nella registrazione dell utente")
            throw error
        }
    }

    const login = async () => {
        try{
            const response = await fetch('http://localhost:8000/user/login',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email:email,
                    password:password,
                }),
            });
            const data = await response.json();
            if (response.ok){
                return data
            }
        } catch (error){
            console.error('Error', error);
            throw error
        }
    }

    const loginUser = async (event) => {
        event.preventDefault();

        const payload = {
            email: email,
            password: password,
        }

        const res = await login(payload)
        if (res) {
            dispatch(setUser(res));
        }
    }



    return (
        <form className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className="inputs"></div>
            {action === "Accedi" ? <div></div> :
                <div className="input">
                    <input type="name" placeholder="Nome" onChange={nameChange} value={displayName}/>
                </div>}
            <p></p>
            {action === "Accedi" ? <div></div> :
                <div className="input">
                    <input type="surname" placeholder="Cognome" onChange={surnameChange} value={displaySurname}/>
                </div>}
            <p></p>
            <div className="input">
                <input type="email" placeholder="Mail" onChange={mailChange} value={email}/>
            </div>
            <p>{messageEmail}</p>
            <div className="input">
                <input type="password" placeholder="Password" onChange={passwordChange} value={password}/>
            </div>
            <p>{message}</p>
            {action === "Registrati" ? <div></div> :
                <div className="forgot-password"><Link to={'/forgotpassword'}>Password dimenticata?</Link></div>}
            <div className="submit-container">
                <button className={action === "Accedi" ? "submit gray" : "submit"} onClick={onRegistration}>Registrati
                </button>
                <button className={action === "Registrati" ? "submit gray" : "submit"} onClick={onLogin}>Accedi</button>
            </div>
            <div>
                <p>{registrationMessage}</p>
            </div>
        </form>
    )
}

