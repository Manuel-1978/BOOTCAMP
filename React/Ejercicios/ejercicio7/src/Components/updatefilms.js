import URL_UPDATEFILMS from '../settings';
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

export default function Updatefilms() {
  const[details,setdetails]= useState({});
    const {id} = useParams();
    useEffect(() => {
        fetch(`${URL_UPDATEFILMS}${id}`)
        .then(response => response.json())
        .then(data => setdetails(data.results))
        
    }, []);
    
    
    return (
        <div className="card w-25 m-auto">
            <div>
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}/>
            </div>
             <div className="card-body">
               <h5>{details.title}</h5>
               <p>{details.overview}</p>
               <date>Date: {details.release_date}</date>
               <p>Vote average: {details.vote_average}</p>
               </div> 
        </div>
    )
}
