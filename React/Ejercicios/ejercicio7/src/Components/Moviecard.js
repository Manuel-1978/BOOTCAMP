import {URL_POSTER_LINK,overviewMaxletters,posterbackground} from '../settings'
import{useHistory} from 'react-router-dom';


export default function Moviecard({movie}) {

const history= useHistory();

function handleClick(e) {
    history.push(`/movie/${e.target.id}`);
}


const shortenOverview = `${movie.overview.split('. ', 1).join(' ')} [...]`;

    return (
        
         <div> 
             {movie.poster_path
               ? <img src={`${URL_POSTER_LINK}${movie.poster_path}`} alt={`Póster de ${movie.title}`} className='card-img-top'/>
                : posterbackground 
             }
                                            
             <h2 className="card-title">{movie.title}</h2>
                      <date>Estreno:{movie.release_date}</date>
                      
                       <p className="card-text">Synopsis:{movie.overview.length > overviewMaxletters ? shortenOverview  : movie.overview}</p>
                       <button className="btn btn-primary d-flex align-self-start" id={movie.id} onClick={handleClick}>🔎 Info</button>
                    
        </div>
        
    )
}
