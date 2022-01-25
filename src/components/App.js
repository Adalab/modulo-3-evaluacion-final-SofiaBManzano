import "../styles/App.scss";
import callToApi from "../services/api";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
function App() {
  //estados
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    callToApi().then((apiData) => {
      setCharacters(apiData);
    });
  }, []);
  console.log(characters);
  // const eachCharacter = characters.map(characters => )
  return (
    <div>
      <h1>Harry Potter</h1>
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
