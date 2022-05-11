import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function Table() {
  const { tableHeads, info } = useContext(PlanetsContext);

  const [search, setSearch] = useState('');

  const planetsResult = info.results;

  useEffect(() => {
    console.log(search);
  });

  const [selected, setSelected] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const [activeFilters, setActiveFilters] = useState([]);

  useEffect(() => {
    console.log(activeFilters);
  }, [activeFilters]);

  const tratarDados = (item) => {
    const bools = [];

    activeFilters.forEach((filter) => {
      switch (filter.comparison) {
      case 'maior que':
        bools.push(Number(item[filter.column]) > Number(filter.value));
        break;
      case 'menor que':
        bools.push(Number(item[filter.column]) < Number(filter.value));
        break;
      case 'igual a':
        bools.push(Number(item[filter.column]) === Number(filter.value));
        break;
      default:
        return true;
      }
    });
    return bools.every((element) => element);
  };

  const tratarOpcoes = (option) => !activeFilters
    .find((filter) => option === filter.column);

  return (
    <div>
      <div className="inputs-container">
        <input
          type="text"
          data-testid="name-filter"
          onChange={ (event) => setSearch(event.target.value) }
          value={ search }
        />
        <select
          data-testid="column-filter"
          value={ selected.column }
          onChange={ (event) => setSelected({ ...selected, column: event.target.value }) }
        >
          {['population', 'orbital_period', 'diameter',
            'rotation_period', 'surface_water']
            .filter(tratarOpcoes)
            .map((column) => (
              <option value={ column } key={ column }>
                {column}
              </option>
            ))}
        </select>
        <select
          data-testid="comparison-filter"
          value={ selected.comparison }
          onChange={
            (event) => setSelected({ ...selected, comparison: event.target.value })
          }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          name="id"
          value={ selected.value }
          onChange={ (event) => setSelected({ ...selected, value: event.target.value }) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            setActiveFilters([...activeFilters, selected]);
            setSelected({
              column: 'orbital_period',
              comparison: 'maior que',
              value: 0,
            });
          } }
        >
          ADICIONAR
        </button>
        <button
          type="button"
          testid="button-remove-filters"
          onClick={ () => {
            setActiveFilters([]);
            setSelected({
              column: 'population',
              comparison: 'maior que',
              value: 0,
            });
          } }
        >
          LIMPAR
        </button>
        {activeFilters.map((filter, index) => (
          <div className="filters" key={ index }>
            <button
              type="button"
              data-testid="filter"
              onClick={ () => {
                const cloneArray = [...activeFilters];
                cloneArray.splice(index, 1);
                setActiveFilters(cloneArray);
              } }
            >
              X
            </button>
            {filter.column}
            {filter.comparison}
            {filter.value}
          </div>
        ))}
      </div>
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
             planetsResult.filter(tratarDados).map((planet) => (planet.name.toLowerCase()
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
