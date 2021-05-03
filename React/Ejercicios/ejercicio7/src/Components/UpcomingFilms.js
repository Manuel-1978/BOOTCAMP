import { useState,useEffect} from 'react';
import {URL_UPCOMING,POSTER_BASE_URL,overviewMaxCharacters} from '../Settings';
import{useHistory} from 'react-router-dom';

export default function UpcomingFilms() {
    
    const [upcomingFilmsList,setUpcomingFilmsList]=useState([])
   
    useEffect(() => {
        fetch(`${URL_UPCOMING}&page=`)
        .then(response => response.json())
        .then(data => setUpcomingFilmsList(data.results))
    }, []);

    const history = useHistory();
    function handleClick(event) {
        history.push(`/film/${event.target.id}`);
    }



    return (
         <>

           
       

</>
      
    )
}
