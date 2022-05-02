import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function Table() {
  const { tableHeads, info } = useContext(PlanetsContext);

  const resultados = info.results;

  useEffect(() => {
    console.log(resultados);
  });

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ () => {} }
      />
      <table>
        <thead>
          <tr>
            {
              tableHeads.map((head) => <th key={ head }>{head}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {resultados && (
            resultados.map((planet) => (
              <tr key={ planet.name }>
                <td data-testid="planet-name">{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))
          )}
          {}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
