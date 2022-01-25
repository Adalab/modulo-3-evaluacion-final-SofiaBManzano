import "../styles/App.scss";
import callToApi from "../services/api";
import { useEffect, useState } from "react";
function App() {
  //estados
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    callToApi().then((apiData) => {
      setCharacters(apiData);
    });
  }, []);
  console.log(characters);
  return (
    <div>
      <h1>Hola mundo</h1>
    </div>
  );
}

export default App;
