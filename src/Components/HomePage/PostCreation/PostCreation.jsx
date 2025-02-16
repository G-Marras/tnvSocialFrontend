import React from "react";
import {useState} from "react";
import "./PostCreation.css"

const PostCreation = () => {
    const MAX_DIMENSIONS = 5 * 1024 * 1024;
    const MAX_TITOLO = 100;
    const MAX_CORPO= 2000;

    const [immaginePost, setImmaginePost] = React.useState(null)
    const [HeaderPost, setHeaderPost] = React.useState(null)
    const [CorpoPost, setCorpoPost] = React.useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()

        const postData = React.useState({
            titoloPost: HeaderPost,
            immaginePost:immaginePost,
            contenutoPost:CorpoPost,
            }



        )
    }

    const ImmagineSelezionata = (event) => {
        const immagine= event.target.files[0];

        if(immagine.size > MAX_DIMENSIONS) {
            alert("Il file caricato è troppo grande per essere inserito. Il limite è di 5 MB")
            return;
        }

        if(immagine){
            const imageUrl = URL.createObjectURL(immagine);
            setImmaginePost(imageUrl);
        }
    }


    const ContenutoTitolo =(event) =>{
        const titolo = event.target.area;

        if(titolo == null){
            alert("Il titolo è obbligatorio")
            return
        }else{
            if(titolo >MAX_TITOLO){
                alert("Il titolo inserito supera l'eccesso di caratteri disponibili (100)")
                return
            }
            else{

                setHeaderPost(titolo)
            }
        }
    }




    return (

        <div className='creazionePost'>
            <form>
                <div>
                    <textarea  name={HeaderPost} className='TitoloPost' onChange={ContenutoTitolo} placeholder='Inserisci il titolo'/>


                </div>

                <div>
                    <input name={immaginePost} type='file' accept='image/png, image/jpeg' placeholder='Inserisci la foto' onChange={ImmagineSelezionata}/>
                    <img className='immaginePreview' src={immaginePost} alt='Immagine'/>
                </div>

                <div>
                    <textarea name="contenutoPost"  className={'ContenitoreCorpoPost'} placeholder='Inserisci il contenuto del post'/>


                </div>

                <button className="ConfermaPost" type='submit' >Carica post</button>
            </form>
        </div>
    )
}

export default  PostCreation


