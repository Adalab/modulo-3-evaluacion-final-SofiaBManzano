import "../styles/App.scss";
import callToApi from "../services/api";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import CharacterDetail from "./CharacterDetail";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import header from "../images/logo-header.png";
import NotFound from "./NotFound";

function App() {
  //estados
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("gryffindor");
  const [filterGender, setFilterGender] = useState("");
  useEffect(() => {
    callToApi(
      `http://hp-api.herokuapp.com/api/characters/house/${filterHouse}`
    ).then((apiData) => {
      setCharacters(apiData);
      console.log(apiData);
    });
  }, [filterHouse]);

  //constante que hace el filtro
  let filter = characters
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
  filter =
    filterGender === ""
      ? filter
      : filter.filter(
          (character) => character.gender.toLowerCase() === filterGender
        );

  const routeCharacterData = useRouteMatch("/character/:characterId");
  console.log(routeCharacterData);
  const getRouteCharacter = () => {
    if (routeCharacterData) {
      const routeCharacterId = routeCharacterData.params.characterId;
      //consolea el id
      console.log(routeCharacterId);
      const routeCharacter = characters.find((character) => {
        return character.id === routeCharacterId;
      });

      return routeCharacter || {};
    }
    // else if (routeCharacterData) {
    //   routeCharacterId !==
    // }
  };
  // console.log(getRouteCharacter());
  //funcion manejadora Input

  const handleInputChange = (value, key) => {
    if (key === "name") {
      setFilterName(value);
    } else if (key === "house") {
      setFilterHouse(value);
    } else if (key === "gender") {
      setFilterGender(value);
    }
  };

  return (
    <div className="body">
      <Switch>
        <Route exact path="/">
          <img className="header" src={header} alt="Harry Potter" />

          <Filter
            filterHouse={filterHouse}
            filterName={filterName}
            filterGender={filterGender}
            handleInputChange={handleInputChange}
          />

          <CharacterList
            filterName={filterName}
            filter={filter}
            characters={characters}
          />
        </Route>

        <Route exact path="/character/:characterId">
          <CharacterDetail getRouteCharacter={getRouteCharacter()} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
