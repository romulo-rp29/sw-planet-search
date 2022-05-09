import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function Table() {
  const { tableHeads, info } = useContext(PlanetsContext);

  const [search, setSearch] = useState('');

  const resultados = info.results;

  useEffect(() => {
    console.log(search);
  });

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (event) => setSearch(event.target.value) }
        value={ search }
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
          {resultados
           && (
             resultados.map((planet) => (planet.name.toLowerCase()
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
