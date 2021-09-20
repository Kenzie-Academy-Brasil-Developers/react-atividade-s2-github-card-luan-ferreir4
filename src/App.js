import { useState } from "react";
import "./App.css";
import InputSearch from './components/InputSearch';
import Repositories from "./components/Repositories";

function App() {
  const [result, setResult] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <InputSearch setResult={setResult}/>
      </header>
      <main className="App-main">
        <Repositories result={result}/>
      </main>
    </div>
  );
}

export default App;
