const DATA_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function jangoFetchData() {
  const response = await fetch(DATA_URL);
  const data = await response.json();
  const planets = data.results;

  return planets;
}

export default jangoFetchData;
