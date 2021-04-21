
import './App.css';
import FirstComponent,{SecondComponent, ThirdComponent} from './components/FirstComponent';
import Counter from "./components/Counter" ;

function App() {
  return (
    <div className="App">
      <Counter />
     {/* <FirstComponent title="Titulo enviado desde el padre" date="16 de agosto de 2025" />
     <FirstComponent title="Otro titulo" date="17 de agosto de 2025" />
     <SecondComponent />
     <ThirdComponent />
      */}
     
    </div>
  );
}

export default App;
