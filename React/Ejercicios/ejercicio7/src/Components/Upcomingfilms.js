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
        <div className='card w-100 m-5 p-1'>
           
           
                    <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-4  justify-content-md-center  align-self-md-center'> 
                    
                    {movies.results?.map((movie) =>(
                    <Moviecard movie={movie} key={movie.id}/>))}

                    </div>                  
                         
           
           
        
        </div>    
    )
}