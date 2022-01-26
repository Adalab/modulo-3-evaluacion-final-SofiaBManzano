import "../styles/App.scss";
import callToApi from "../services/api";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import CharacterDetail from "./CharacterDetail";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import header from "../images/logo-header.png";

function App() {
  //estados
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("gryffindor");
  useEffect(() => {
    callToApi(
      `http://hp-api.herokuapp.com/api/characters/house/${filterHouse}`
    ).then((apiData) => {
      setCharacters(apiData);
      console.log(apiData);
    });
  }, [filterHouse]);

  //constante que hace el filtro
  const filter = characters
    .sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
    .filter((character) =>
      character.name.toLowerCase().includes(filterName.toLowerCase())
    )
    .filter((character) => character.house.toLowerCase().includes(filterHouse));

  //const routeMatch
  const routeCharacterData = useRouteMatch("/character/:characterId");
  const getRouteCharacter = () => {
    if (routeCharacterData !== null) {
      // console.log(routeCharacterData.params.characterId);
      const routeCharacterId = routeCharacterData.params.characterId;
      // console.log(routeCharacterId);
      const routeCharacter = characters.find((character) => {
        return character.id === routeCharacterId;
      });
      return routeCharacter;
    }
  };
  // console.log(getRouteCharacter());
  //funcion manejadora Input

  const handleInputChange = (value, key) => {
    if (key === "name") {
      setFilterName(value);
    } else if (key === "house") {
      setFilterHouse(value);
    }
  };

  return (
    <div className="body">
      <Route exact path="/">
        <img className="header" src={header} alt="Harry Potter" />

        <Filter
          filterHouse={filterHouse}
          filterName={filterName}
          handleInputChange={handleInputChange}
        />
      </Route>
      <Route exact path="/">
        <CharacterList
          filterName={filterName}
          filter={filter}
          characters={characters}
        />
      </Route>
      <Switch>
        <Route exact path="/character/:characterId">
          <CharacterDetail getRouteCharacter={getRouteCharacter()} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
