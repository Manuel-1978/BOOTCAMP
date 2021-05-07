import {useEffect,useState} from 'react';
import {URL_UPCOMINGFILMS} from '../settings';
import Moviecard from './Moviecard';




export default function Upcomingfilms() {

    const[movies,setMovies]= useState([]);
  
   
  useEffect(() => {
      
      fetch(`${URL_UPCOMINGFILMS}&page=`)
      .then(response => response.json())
      .then(data=> setMovies(data));
      
  }, [])
 
  
    return (
        <>
           
           
                    <div className='card w-25 m-3 d-flex col-12 align-items-md-center'> 
                    
                    {movies.results?.map((movie) =>(
                    <Moviecard movie={movie} key={movie.id}/>))}

                    </div>
                    
             
               
           
           
        
        </>    
    )
}