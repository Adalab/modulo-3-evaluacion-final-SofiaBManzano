import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import placeholder from "../images/placeholder-harrypotter.jpg";
const CharacterDetail = (props) => {
  const character = props.getRouteCharacter;
  const picture = character.image === "" ? placeholder : character.image;

  const gender = character.gender === "female" ? "Mujer" : "Hombre";
  const status = character.alive === true ? "Vivx" : "Muerta :(";

  const human = () => {
    if (character.species === "human") {
      return "Humanx";
    } else if (character.species === "half-giant") {
      return "Medio-gigante";
    } else if (character.species === "werewolf") {
      return "Hombre-lobo";
    } else if (character.species === "cat") {
      return "Gatito";
    } else if (character.species === "goblin") {
      return "Duende";
    } else if (character.species === "owl") {
      return "Búho";
    } else if (character.species === "ghost") {
      return "Fantasma";
    } else if (character.species === "poltergeist") {
      return "Poltergeist";
    } else if (character.species === "giant") {
      return "Gigante";
    } else if (character.species === "centaur") {
      return "Centauro";
    } else if (character.species === "vampire") {
      return "Vampiro";
    } else if (character.species === "house-elf") {
      return "Elfo doméstico";
    } else if (character.species === "half-human") {
      return "Medio-humano";
    }
  };
  return (
    <>
      <NavLink to="/">Volver</NavLink>
      <img alt={character.name} src={picture}></img>
      <h3>{character.name}</h3>
      <h3>Estatus:</h3>
      <p>{status}</p>
      <h3>Género:</h3>
      <p>{gender}</p>
      <h3>Especie:</h3>
      <p>{human()}</p>
      <h3>Casa:</h3>
      <p>{character.house}</p>
    </>
  );
};
export default CharacterDetail;
