import {useState} from "react";
import {useParams} from "react-router-dom";
import {useEffect} from 'react';


export function GetRegistrationToken() {
    const [message, setMessage] = useState("");
    const [hasConfirmed, setHasConfirmed] = useState(false);
    const { id, registrationToken } = useParams();

    const confirmRegistration = async() => {
        if (hasConfirmed) return
        try{
            const response = await fetch(`http://localhost:8000/user/${id}/confirm/${registrationToken}`,{
                method:'GET',
                headers:{
                    'Content-Type' : 'application/json'
                },
            });
            console.log(response)
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

    return(
        <div className="container"><p>{message}</p></div>
    )


}