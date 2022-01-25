// Fichero src/services/api.js
const callToApi = () => {
  // Llamamos al API
  return fetch("http://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((data) =>
      data.map((response) => ({
        // Limpio los datos

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
