import {useState} from 'react'
import "./ResetPassword.css"

export const ResetPassword = () => {

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    function mailChange(event){
        setEmail(event.target.value)
    }

    const onRequest = (event) =>{
        event.preventDefault()
        handleValidationMail()
        if (handleValidationMail() === true){
            setMessage("abbiamo inviato una mail per il cambio della password")
            sendMailUpdatePassword()
        } else {
            setMessage("errore nei dati inseriti")
        }
    }

    const sendMailUpdatePassword = async() =>{
        try {
            const response = await fetch('http://localhost:8000/user/resetPassword',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email:email})
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

    const handleValidationMail = () => {
        const regExm = /[a-zA-Z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,8}(.[a-z]{2,8})?/g
        if (email === "") {
            return false;
        } else {
            if (regExm.test(email)) {
                return true;
            } else {
                setEmail("")
                return false;
            }
        }
    }

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
                <button className="submit" onClick={onRequest}>Conferma</button>
            </div>
            <p>{message}</p>
        </form>
    )
}
