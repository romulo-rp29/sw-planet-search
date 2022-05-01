function jangoFetchData() {
  const response = fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const planets = response.json();
  return response.ok ? Promise.resolve(planets) : Promise.reject(planets);
}

export default jangoFetchData;
