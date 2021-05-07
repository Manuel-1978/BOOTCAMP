import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { URL_POSTER_LINK, URL_UPCOMINGFILMS_BASE, URL_UPCOMINGFILMS_API, posterbackground } from '../settings';

export default function MovieDetails() {

    const [movieData, setmovieData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`${URL_UPCOMINGFILMS_BASE}${id}${URL_UPCOMINGFILMS_API}`)
        .then(response => response.json())
        .then(data => setmovieData(data))
    }, [id]);

    return (           
        <div className='card w-50 m-3 d-flex col-12 align-items-md-center p-3 bg-success'>
            {movieData.poster_path
                ? <img src={`${URL_POSTER_LINK}${movieData?.poster_path}`} alt={`Póster de ${movieData?.title}`}/>
                : posterbackground
            }
            <div>
                <h1>{movieData?.title}</h1>
                <p>{movieData?.tagline}</p>
                <date>Estreno: {movieData?.release_date}</date>
                <p>Género:{movieData.genres?.map(genre => (<span className='genre' key={genre.id}>{genre.name} </span>))}</p>
                <p>Resumen:{movieData?.overview}</p>
                <p className='average'>{movieData?.vote_average} / 10</p>
              
               
            </div>
        </div>
    )
}