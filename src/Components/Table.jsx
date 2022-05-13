import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function Table() {
  const {
    tableHeads,
    search,
    planetsResult,
    tratarDados,
  } = useContext(PlanetsContext);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {
              tableHeads.map((head) => <th key={ head }>{head}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {planetsResult
           && (
             planetsResult
               .filter(tratarDados)
               .map((planet) => (planet.name.toLowerCase()
                 .includes(search.toLowerCase()) ? (
                   <tr key={ planet.name }>
                     <td data-testid="planet-name">
                       {planet.name}
                     </td>
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
                 ) : null))
           )}
          {}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
