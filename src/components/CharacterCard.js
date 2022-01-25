const CharacterCard = (props) => {
  return (
    <>
      <img src={`${props.eachCharacter.image}`}></img>
      <h3>{props.eachCharacter.name}</h3>
      <p>{props.eachCharacter.species}</p>
    </>
  );
};
export default CharacterCard;
