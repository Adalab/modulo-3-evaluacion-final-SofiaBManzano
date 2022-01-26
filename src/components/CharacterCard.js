import "../styles/CharacterList.scss";
import placeholder from "../images/placeholder-harrypotter.jpg";
const CharacterCard = (props) => {
  const picture =
    props.eachCharacter.image === "" ? placeholder : props.eachCharacter.image;

  const human = () => {
    if (
      props.eachCharacter.species === "human" &&
      props.eachCharacter.gender === "female"
    ) {
      return "Humana";
    } else if (
      props.eachCharacter.species === "human" &&
      props.eachCharacter.gender === "male"
    ) {
      return "Humano";
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
      <h3 className="list__name">{props.eachCharacter.name}</h3>
      <p className="list__specie">{human()}</p>
    </>
  );
};
export default CharacterCard;
