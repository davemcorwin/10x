/* istanbul ignore file */
const testData = [
  {
    title: "A New Hope",
    episode_id: 4,
    opening_crawl:
      "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    director: "George Lucas",
    producer: "Gary Kurtz, Rick McCallum",
    release_date: "1977-05-25",
    characters: [
      "http://swapi.dev/api/people/1/",
      "http://swapi.dev/api/people/2/",
      "http://swapi.dev/api/people/3/",
      "http://swapi.dev/api/people/4/",
      "http://swapi.dev/api/people/5/",
      "http://swapi.dev/api/people/6/",
      "http://swapi.dev/api/people/7/",
      "http://swapi.dev/api/people/8/",
      "http://swapi.dev/api/people/9/",
      "http://swapi.dev/api/people/10/",
      "http://swapi.dev/api/people/12/",
      "http://swapi.dev/api/people/13/",
      "http://swapi.dev/api/people/14/",
      "http://swapi.dev/api/people/15/",
      "http://swapi.dev/api/people/16/",
      "http://swapi.dev/api/people/18/",
      "http://swapi.dev/api/people/19/",
      "http://swapi.dev/api/people/81/",
    ],
    planets: [
      "http://swapi.dev/api/planets/1/",
      "http://swapi.dev/api/planets/2/",
      "http://swapi.dev/api/planets/3/",
    ],
    starships: [
      "http://swapi.dev/api/starships/2/",
      "http://swapi.dev/api/starships/3/",
      "http://swapi.dev/api/starships/5/",
      "http://swapi.dev/api/starships/9/",
      "http://swapi.dev/api/starships/10/",
      "http://swapi.dev/api/starships/11/",
      "http://swapi.dev/api/starships/12/",
      "http://swapi.dev/api/starships/13/",
    ],
    vehicles: [
      "http://swapi.dev/api/vehicles/4/",
      "http://swapi.dev/api/vehicles/6/",
      "http://swapi.dev/api/vehicles/7/",
      "http://swapi.dev/api/vehicles/8/",
    ],
    species: [
      "http://swapi.dev/api/species/1/",
      "http://swapi.dev/api/species/2/",
      "http://swapi.dev/api/species/3/",
      "http://swapi.dev/api/species/4/",
      "http://swapi.dev/api/species/5/",
    ],
    created: "2014-12-10T14:23:31.880000Z",
    edited: "2014-12-20T19:49:45.256000Z",
    url: "http://swapi.dev/api/films/1/",
  },
  {
    title: "The Empire Strikes Back",
    episode_id: 5,
    opening_crawl:
      "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
    director: "Irvin Kershner",
    producer: "Gary Kurtz, Rick McCallum",
    release_date: "1980-05-17",
    characters: [
      "http://swapi.dev/api/people/1/",
      "http://swapi.dev/api/people/2/",
      "http://swapi.dev/api/people/3/",
      "http://swapi.dev/api/people/4/",
      "http://swapi.dev/api/people/5/",
      "http://swapi.dev/api/people/10/",
      "http://swapi.dev/api/people/13/",
      "http://swapi.dev/api/people/14/",
      "http://swapi.dev/api/people/18/",
      "http://swapi.dev/api/people/20/",
      "http://swapi.dev/api/people/21/",
      "http://swapi.dev/api/people/22/",
      "http://swapi.dev/api/people/23/",
      "http://swapi.dev/api/people/24/",
      "http://swapi.dev/api/people/25/",
      "http://swapi.dev/api/people/26/",
    ],
    planets: [
      "http://swapi.dev/api/planets/4/",
      "http://swapi.dev/api/planets/5/",
      "http://swapi.dev/api/planets/6/",
      "http://swapi.dev/api/planets/27/",
    ],
    starships: [
      "http://swapi.dev/api/starships/3/",
      "http://swapi.dev/api/starships/10/",
      "http://swapi.dev/api/starships/11/",
      "http://swapi.dev/api/starships/12/",
      "http://swapi.dev/api/starships/15/",
      "http://swapi.dev/api/starships/17/",
      "http://swapi.dev/api/starships/21/",
      "http://swapi.dev/api/starships/22/",
      "http://swapi.dev/api/starships/23/",
    ],
    vehicles: [
      "http://swapi.dev/api/vehicles/8/",
      "http://swapi.dev/api/vehicles/14/",
      "http://swapi.dev/api/vehicles/16/",
      "http://swapi.dev/api/vehicles/18/",
      "http://swapi.dev/api/vehicles/19/",
      "http://swapi.dev/api/vehicles/20/",
    ],
    species: [
      "http://swapi.dev/api/species/1/",
      "http://swapi.dev/api/species/2/",
      "http://swapi.dev/api/species/3/",
      "http://swapi.dev/api/species/6/",
      "http://swapi.dev/api/species/7/",
    ],
    created: "2014-12-12T11:26:24.656000Z",
    edited: "2014-12-15T13:07:53.386000Z",
    url: "http://swapi.dev/api/films/2/",
  },
];

/**
 * Returns a list of Star Wars Films
 */
export const getFilms = async (props = {}) => {
  const { format = "" } = props;
  if (format === "error") {
    throw new Error("Invalid Format");
  }
  return testData;
};

/**
 * Returns an individual Star Wars Film
 *
 * @param {getFilmById} getFilmByIdParams
 * @typedef {Object} getFilmById
 * @property {string} id - movie id by release order
 */
export const getFilmById = async (props = {}) => {
  const { id } = props;
  if (id !== 1) {
    throw new Error("Invalid Id");
  }
  return testData[0];
};
