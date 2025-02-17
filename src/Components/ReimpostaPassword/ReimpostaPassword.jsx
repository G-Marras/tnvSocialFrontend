import {useState} from 'React'
import "./ReimpostaPassword.css"

export const ReimpostaPassword = () => {

    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")


    function newPasswordChange(event){
        setNewPassword(event.target.value)
    }

    function confirmPasswordChange(event){
        setConfirmPassword(event.target.value)
    }

    const handleValidationPassword = (event) => {
        event.preventDefault()
        const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
        console.log(regExp.test(newPassword))
        if (newPassword === "") {
            setErrorMessage("inserisci password")
            return false;
        } else {
            if (regExp.test(newPassword)) {
                setErrorMessage("")
                return true;
            } else {
                setErrorMessage("password non valida")
                setNewPassword("")
                return false;
            }
        }
    }

    const samePassword =(event) =>{
        event.preventDefault()
        if (newPassword === confirmPassword){
            //
        }else {

        }
    }

    //da fare, on click per il bottone che ti reimposta la password e ti riporta alla pagina di login


    return (
        <form className='container' onSubmit={handleValidationPassword}>
            <div className='header'>
                <div className='text'>Reimposta Password</div>
                <div className='underline'></div>
            </div>
            <div className="inputs"></div>
            <div className="input">
                <input type="password" placeholder="Password" onChange={newPasswordChange} value={newPassword}/>
            </div>
            <p>{errorMessage}</p>
            <div className="input">
                <input type="password" placeholder="Conferma Password" onChange={confirmPasswordChange}
                       value={confirmPassword}/>
            </div>
            <div className="submit-container">
                <button className="submit">Reimposta</button>
            </div>
        </form>
    )
}