import "../styles/CharacterList.scss";

const CharacterCard = (props) => {
  const picture =
    props.eachCharacter.image === ""
      ? "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"
      : props.eachCharacter.image;

  const human = () => {
    if (props.eachCharacter.species === "human") {
      return "Humanx";
    } else if (props.eachCharacter.species === "half-giant") {
      return "Medio-gigante";
    } else if (props.eachCharacter.species === "werewolf") {
      return "Hombre-lobo";
    } else if (props.eachCharacter.species === "cat") {
      return "Gatito";
    } else if (props.eachCharacter.species === "goblin") {
      return "Duende";
    } else if (props.eachCharacter.species === "owl") {
      return "Búho";
    } else if (props.eachCharacter.species === "ghost") {
      return "Fantasma";
    } else if (props.eachCharacter.species === "poltergeist") {
      return "Poltergeist";
    } else if (props.eachCharacter.species === "giant") {
      return "Gigante";
    } else if (props.eachCharacter.species === "centaur") {
      return "Centauro";
    } else if (props.eachCharacter.species === "vampire") {
      return "Vampiro";
    } else if (props.eachCharacter.species === "house-elf") {
      return "Elfo doméstico";
    } else if (props.eachCharacter.species === "half-human") {
      return "Medio-humano";
    }
  };

  return (
    <>
      <img
        className="list__image"
        alt={props.eachCharacter.name}
        src={picture}
      ></img>
      <h3>{props.eachCharacter.name}</h3>
      <p>{human()}</p>
    </>
  );
};
export default CharacterCard;
