import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function Table() {
  const { tableHeads, info } = useContext(PlanetsContext);

  const [search, setSearch] = useState('');

  const resultados = info.results;

  useEffect(() => {
    console.log(search);
  });

  const [selected, setSelected] = useState({
    column: '',
    comparsion: '',
    value: '',
  });

  const [activeFilters, setActiveFilters] = useState([]);

  useEffect(() => {
    console.log(activeFilters);
  }, [activeFilters]);

  const tratarDados = (linha) => {
    const bools = [];

    activeFilters.forEach((filter) => {
      switch (filter.comparsion) {
      case '>':
        bools.push(Number(linha[filter.column]) > Number(filter.value));
        break;
      case '<':
        bools.push(Number(linha[filter.column]) < Number(filter.value));
        break;
      case '=':
        bools.push(linha[filter.column] === Number(filter.value));
        break;
      default:
        return true;
      }
    });
    return bools.every((el) => el);
  };

  const tratarOpcoes = (opcao) => !activeFilters
    .find((filtro) => opcao === filtro.column);

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
          onChange={ (e) => setSelected({ ...selected, column: e.target.value }) }
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
          value={ selected.comparsion }
          onChange={ (e) => setSelected({ ...selected, comparsion: e.target.value }) }
        >
          <option value=">">maior que</option>
          <option value="<">menor que</option>
          <option value="=">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          name="id"
          value={ selected.value }
          onChange={ (e) => setSelected({ ...selected, value: e.target.value }) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            setActiveFilters([...activeFilters, selected]);
            setSelected({
              column: '',
              comparsion: '',
              value: '',
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
              column: '',
              comparsion: '',
              value: '',
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
            {' '}
            {filter.comparsion}
            {' '}
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
          {resultados
           && (
             resultados.filter(tratarDados).map((planet) => (planet.name.toLowerCase()
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
