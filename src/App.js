import { useState } from "react";
import "./App.css";
import InputSearch from './components/InputSearch';
import Repositories from "./components/Repositories";

function App() {
  const [result, setResult] = useState();
  const [searched, setSearched] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <InputSearch setResult={setResult} setSearched={setSearched}/>
      </header>
      <main className="App-main">
        {searched &&
          <Repositories result={result}/>
        }
        
      </main>
    </div>
  );
}

export default App;
