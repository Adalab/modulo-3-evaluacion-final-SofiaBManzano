import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const CharacterDetail = (props) => {
  return (
    <>
      <NavLink to="/">Volver</NavLink>
      <p>HOLA</p>

      {/* <img alt={character.name} src={character.image}></img>
      <h3>{character.name}</h3>
      <h3>Estatus:</h3>
      <p>{character.alive}</p>
      <h3>Género:</h3>
      <p>{character.gender}</p>
      <h3>Especie:</h3>
      <p>{character.species}</p>
      <h3>Casa:</h3>
      <p>{character.house}</p> */}
    </>
  );
};
export default CharacterDetail;
