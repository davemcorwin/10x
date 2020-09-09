/* istanbul ignore file */

export const getFilms = async () => {
  const response = await fetch("https://swapi.dev/api/films");
  const json = await response.json();
  return json.results;
};

export const getFilmById = async ({ id }) => {
  return {};
};
