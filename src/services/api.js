// Fichero src/services/api.js
import uuid from "react-uuid";
const callToApi = () => {
  // Llamamos al API
  return fetch("http://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((data) =>
      data.map((response) => ({
        // Limpio los datos
        id: uuid(),
        name: response.name,
        species: response.species,
        image: response.image,
        house: response.house,
        alive: response.alive,
        gender: response.gender,
      }))
    );
};

export default callToApi;
