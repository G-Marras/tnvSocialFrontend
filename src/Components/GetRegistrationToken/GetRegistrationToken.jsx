import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from 'react';


export function GetRegistrationToken() {
    const [message, setMessage] = useState("");
    const [hasConfirmed, setHasConfirmed] = useState(false);
    const { id, registrationToken } = useParams();
    const navigate = useNavigate();

    const confirmRegistration = async() => {
        if (hasConfirmed) return
        try{
            const response = await fetch(`http://localhost:8000/user/${id}/confirm/${registrationToken}`,{
                method:'GET',
                headers:{
                    'Content-Type' : 'application/json'
                },
            });
            const  data = await response.json();
            if (response.ok){
                setMessage("Registrazione confermata con successo")
                setHasConfirmed(true)
                return data
            } else {
                setMessage("Errore durante la conferma")
                setHasConfirmed(true)
            }
        } catch (error){
            console.error('Error', error);
            throw  error
        }
    }

    useEffect(() => {
        confirmRegistration();
    }, [id, registrationToken]);

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/authentication');
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigate]);



    return(
        <div className="container">
            <h1>{message}</h1>
            <p>stai per essere reindirizzato alla pagina di autenticazione in 5 secondi</p>
        </div>
    )


}