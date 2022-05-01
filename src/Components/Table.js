import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import jangoFetchData from '../services/planetsAPI';

const { planets } = useContext(PlanetsContext);

const tableHeads = [
  'Name',
  'Rotation Period',
  'Orbital Period',
  'Diameter',
  'Climate',
  'Gravity',
  'Terrain',
  'Surface Water',
  'Population',
  'Films',
  'Created',
  'Edited',
  'URL',
];

function Table() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {
              tableHeads.filter((head) => <th key={ head }>{head}</th>)
            }
          </tr>
        </thead>
        <tbody>
          <tbody>
            { planets.filter((item) => (
              <tr key={ item.name }>
                <td data-testid="planet-name">{item.name}</td>
                <td>{item.rotation_period}</td>
                <td>{item.orbital_period}</td>
                <td>{item.diameter}</td>
                <td>{item.climate}</td>
                <td>{item.gravity}</td>
                <td>{item.terrain}</td>
                <td>{item.surface_water}</td>
                <td>{item.population}</td>
                <td>{item.films}</td>
                <td>{item.created}</td>
                <td>{item.edited}</td>
                <td>{item.url}</td>
              </tr>
            ))}
          </tbody>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
