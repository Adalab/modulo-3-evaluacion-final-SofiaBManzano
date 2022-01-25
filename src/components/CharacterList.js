import CharacterCard from "./CharacterCard";
import "../styles/CharacterList.scss";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const CharacterList = (props) => {
  const characterElements = props.filter.map((eachCharacter, index) => {
    return (
      <li key={index} className="list__container">
        <NavLink to="/character">
          <CharacterCard eachCharacter={eachCharacter} />
        </NavLink>
      </li>
    );
  });
  return <ul className="list">{characterElements}</ul>;
};
export default CharacterList;
