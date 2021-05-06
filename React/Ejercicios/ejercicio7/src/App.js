import Footer from './Components/footer';
import Upcomingfilms from './Components/Upcomingfilms';
import './App.css';
import Navbar from './Components/Navbar'
import {useEffect,useState} from 'react';
import {URL_UPCOMINGFILMS} from './settings';
function App() {

    
  const[movies,setMovies]= useState([]);
  
   
  useEffect(() => {
      
      fetch(`${URL_UPCOMINGFILMS}`)
      .then(response => response.json())
      .then(data=> setMovies(data.results));
      
  }, []);
 
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="row p-5 m-5 bg-dark">
        <h1 className="text-danger">Próximos extrenos</h1>
      <Upcomingfilms movies={movies} setMovies={setMovies}/></div>
       <Footer />     
    </div>
  );
}

export default App;
