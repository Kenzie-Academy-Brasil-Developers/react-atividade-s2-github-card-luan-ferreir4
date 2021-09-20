import { useState } from "react";
import "./App.css";
import InputSearch from './components/InputSearch';
import Repositories from "./components/Repositories";

function App() {
  const [resultList, setResultList] = useState([]);
  const [notFound,setNotFound] = useState(false)
  const [searched, setSearched] = useState(false);

  const searchRepos = (user, repo) => {
    fetch(`https://api.github.com/repos/${user}/${repo}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.message) {
          setNotFound(true);
        } else {
          setNotFound(false);
          setResultList([...resultList,response]);
          setSearched(true);
        }
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <InputSearch notFound={notFound} searchRepos={searchRepos}/>
      </header>
      <main className="App-main">
        {searched &&
          <Repositories resultList={resultList}/>
        }
      </main>
    </div>
  );
}

export default App;
