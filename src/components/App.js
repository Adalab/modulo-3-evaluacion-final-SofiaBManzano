import "../styles/App.scss";
import callToApi from "../services/api";
import { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import CharacterDetail from "./CharacterDetail";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
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

  //const routeMatch
  const routeCharacterData = useRouteMatch("/character/:characterId");
  const getRouteCharacter = () => {
    if (routeCharacterData !== null) {
      console.log(routeCharacterData.params.characterId);
      const routeCharacterId = routeCharacterData.params.characterId;
      const routeCharacter = characters.find((character) => {
        return character.id === routeCharacterId;
      });
      return routeCharacter;
    }
  };

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
      <Route exact path="/">
        <h1>Harry Potter</h1>
        <Filter handleInputChange={handleInputChange} />
      </Route>
      <Route exact path="/">
        <CharacterList filter={filter} characters={characters} />
      </Route>
      <Switch>
        <Route exact path="/character/:characterId">
          <CharacterDetail characters={getRouteCharacter()} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
