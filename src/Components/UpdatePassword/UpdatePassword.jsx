import {useState} from 'React'
import "./UpdatePassword.css"
import {useNavigate, useParams} from "react-router-dom";

export const UpdatePassword = () => {

    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const { id, registrationToken } = useParams();
    const navigate = useNavigate();


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
            return false;
        } else {
            if (regExp.test(newPassword)) {
                setErrorMessage("")
                return true;
            } else {
                setNewPassword("")
                return false;
            }
        }
    }

    const samePassword =(event) =>{
        event.preventDefault()
        if (newPassword === confirmPassword){
            passwordUpdate()
            navigate('/authentication')
        } else {
            setErrorMessage("le password non coincidono")
            setNewPassword("")
            setConfirmPassword("")
        }
    }

    const passwordUpdate = async() => {
        try{
            console.log(id, registrationToken)
            const response = await fetch(`http://localhost:8000/user/${id}/updatePassword/`,{
                method:'PATCH',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    password: newPassword,
                    registrationToken: registrationToken,
                }),
            });
            console.log(response)
            const  data = await response.json();
            if (response.ok){
                return data
            }
        } catch (error){
            console.error('Error', error);
            throw  error
        }
    }


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
                <button className="submit" onClick={samePassword}>Reimposta</button>
            </div>
        </form>
    )
}