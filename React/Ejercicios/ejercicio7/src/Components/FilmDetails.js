import React,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { POSTER_BASE_URL, FILM_DETAIL_URL, FILM_DETAIL_URL_SUFFIX, TMDB_URL, LOGO_TMBD_BOTON_URL } from '../Settings';

export default function FilmDetails() {

    const [filmData, setFilmData] = useState({});
    
    const { id } = useParams();

    useEffect(() => {
        fetch(`${FILM_DETAIL_URL}${id}${FILM_DETAIL_URL_SUFFIX}`)
        .then(response => response.json())
        .then(data => setFilmData(data))
    }, [id]);

    return (
        <>
            
           
        </>
    )
}