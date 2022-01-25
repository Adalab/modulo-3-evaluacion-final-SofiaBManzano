import CharacterCard from "./CharacterCard";
import "../styles/CharacterList.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CharacterList = (props) => {
  const characterElements = props.filter.map((eachCharacter) => {
    // console.log(eachCharacter.id);
    return (
      <Link to={`/character/${eachCharacter.id}`}>
        <li key={eachCharacter.id} className="list__container">
          <CharacterCard eachCharacter={eachCharacter} />
        </li>
      </Link>
    );
  });
  return <ul className="list">{characterElements}</ul>;
};
export default CharacterList;
