import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const characterElements = props.characters.map((eachCharacter, index) => {
    return (
      <li key={index}>
        <CharacterCard eachCharacter={eachCharacter} />
      </li>
    );
  });
  return <ul>{characterElements}</ul>;
};
export default CharacterList;
