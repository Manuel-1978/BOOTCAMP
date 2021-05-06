





export default function Upcomingfilms({movies}) {

    
  
    return (
        <>
            {
             movies.map((movie)=>{
        
                return( 
                    
                    <div className='card w-25 m-4 d-flex align-items-md-center'> 
                   
                         
                       <h5 className="card-title">Title:{movie.title}</h5>
                      <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                       <h5 className="card-text">Synopsis:{movie.overview}</h5>
                       <date>Estreno:{movie.release_date}</date>
                       <p className="averange-text">Rating:{movie.vote_average}</p>
                       <button href="#" class="btn btn-primary d-flex align-self-start">+ Info</button>
                    </div>
                    
               )})
            }
        
        </>    
    )
}