import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import placeholder from "../images/placeholder-harrypotter.jpg";
import "../styles/CharacterDetail.scss";
const CharacterDetail = (props) => {
  const character = props.getRouteCharacter;
  const picture = character.image === "" ? placeholder : character.image;

  const gender = character.gender === "female" ? "Mujer" : "Hombre";
  const status =
    character.alive === true ? (
      <p>
        "Vivx"
        <span>
          <i className="fas fa-hat-wizard"> </i>
        </span>
      </p>
    ) : (
      <p>
        Muerta
        <span>
          <i className="fas fa-solid fa-church"></i>
        </span>
      </p>
    );

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
    <div className="detail">
      <NavLink className="back" to="/">
        Volver
      </NavLink>
      <img alt={character.name} src={picture}></img>
      <div className="detail__title">
        <h3 className="detail__title--name">{character.name}</h3>
        <div className="container">
          <h3 className="detail__title--status">Estatus:</h3>
          <div className="detail__subtitle--status">{status}</div>
          <h3 className="detail__title--gender">Género:</h3>
          <p className="detail__subtitle--gender">{gender}</p>
          <h3 className="detail__title--specie">Especie:</h3>
          <p className="detail__subtitle--specie">{human()}</p>
          <h3 className="detail__title--house">Casa:</h3>
          <p className="detail__subtitle--house">{character.house}</p>
        </div>
      </div>
    </div>
  );
};
export default CharacterDetail;
