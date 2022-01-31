// Fichero src/services/api.js
import uuid from "react-uuid";
const callToApi = (url) => {
  // Llamamos al API
  return fetch(url)
    .then((response) => response.json())
    .then((data) =>
      data.map((response) => ({
        // Limpio los datos
        id: `${response.name}${response.actor}`,
        alternatenames: response.alternate_names,
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
