import React from "react";
import {useState} from "react";
import "../CreazionePost/CreazionePost.css"

const CreazionePost = () => {
    const MAX_DIMENSIONS = 5 * 1024 * 1024;

    const [immaginePost, setImmaginePost] = React.useState(null)




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






    return (

        <div className='creazionePost'>

            <div className='ContenitoreTitolo'>
                <textarea className='TitoloPost' placeholder='Inserisci il titolo'/>

            </div>

            <div className='ContenitoreImmagine'>

                <input type='file' accept='image/png, image/jpeg' placeholder='Inserisci la foto' onChange={ImmagineSelezionata}/>
                <img className='immaginePreview' src={immaginePost} alt='Immagine' />

            </div>

            <div className='ContenitoreCorpoPost'>
            <input type='text' placeholder='Inserisci il corpo del post'/>

            </div>

            <button className='ConfermaPost'>Carica post</button>

        </div>
    )
}

export default  CreazionePost


