import Footer from '../Components/footer';
import Upcomingfilms from '../Components/Upcomingfilms';
import Navbar from '../Components/Navbar'


export default function Principal() {
    return (
        <div>
            <div className="App">
                        <Navbar></Navbar>
               <div className="row p-5 m-5 bg-dark">
                       <h1 className="text-danger">Próximos extrenos</h1>
                       <Upcomingfilms />
                </div>
                       <Footer />     
    </div>
        </div>
    )
}
