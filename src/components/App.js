import "../styles/App.scss";
import callToApi from "../services/api";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import CharacterDetail from "./CharacterCard";
function App() {
  //estados
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("gryffindor");
  useEffect(() => {
    callToApi().then((apiData) => {
      setCharacters(apiData);
    });
  }, []);
  console.log(characters);

  //constante que hace el filtro
  const filter = characters
    .filter((character) =>
      character.name.toLowerCase().includes(filterName.toLowerCase())
    )
    .filter((character) => character.house.toLowerCase().includes(filterHouse));

  //funcion manejadora Input
  const handleInputChange = (value, key) => {
    if (key === "name") {
      setFilterName(value);
    } else if (key === "house") {
      setFilterHouse(value);
    }
  };
  return (
    <div>
      <h1>Harry Potter</h1>
      <Filter handleInputChange={handleInputChange} />
      <CharacterList filter={filter} characters={characters} />
      <CharacterDetail />
    </div>
  );
}

export default App;
