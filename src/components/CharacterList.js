import CharacterCard from "./CharacterCard";
import "../styles/CharacterList.scss";

const CharacterList = (props) => {
  const characterElements = props.filter.map((eachCharacter, index) => {
    return (
      <li key={index} className="list__container">
        <CharacterCard eachCharacter={eachCharacter} />
      </li>
    );
  });
  return <ul>{characterElements}</ul>;
};
export default CharacterList;
