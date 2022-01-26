import CharacterCard from "./CharacterCard";
import "../styles/CharacterList.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CharacterList = (props) => {
  if (props.filter.length > 0) {
    const characterElements = props.filter.map((eachCharacter) => {
      // console.log(eachCharacter.id);
      return (
        <Link key={eachCharacter.id} to={`/character/${eachCharacter.id}`}>
          <li className="list__container">
            <CharacterCard eachCharacter={eachCharacter} />
          </li>
        </Link>
      );
    });
    return <ul className="list">{characterElements}</ul>;
  } else {
    return (
      <p>
        No te inventes nombres, no hay ningún personaje que se llame{" "}
        {props.filterName}.
      </p>
    );
  }
};
export default CharacterList;
