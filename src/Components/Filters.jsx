import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function Filters() {
  const {
    search,
    setSearch,
    activeFilters,
    setActiveFilters,
    selected,
    setSelected,
    numericFilters,
    tratarOpcoes,
  } = useContext(PlanetsContext);

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
          {numericFilters
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
          data-testid="button-remove-filters"
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

        {/* v---------------------------------------------------------------v */}
        <label htmlFor="column-sort">
          Ordenar:
          <select
            data-testid="column-sort"
            name="sortColumn"
            // onChange={}
          >
            {numericFilters
              .filter(tratarOpcoes)
              .map((column, index) => (
                <option value={ column } key={ index }>
                  {column}
                </option>
              ))}
          </select>
        </label>
        <label htmlFor="sort-asc" value="ASC">
          <input
            type="radio"
            data-testid="column-sort-input-asc"
            id="sort-asc"
            name="sortRadioButton"
            value="ASC"
            defaultChecked
            // onChange={}
          />
          Ascendente
        </label>
        <label htmlFor="sort-desc" value="DESC">
          <input
            type="radio"
            data-testid="column-sort-input-desc"
            id="sort-desc"
            name="sortRadioButton"
            value="DESC"
            // onChange={}
          />
          Descendente
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          label="ordenar"
          // onClick={}
        >
          Ordenar
        </button>
        {/* ^---------------------------------------------------------------^ */}

        {activeFilters.map((filter, index) => (
          <div data-testid="filter" key={ index }>
            <button
              type="button"
              onClick={ () => {
                const cloneArray = [...activeFilters];
                cloneArray.splice(index, 1);
                setActiveFilters(cloneArray);
              } }
            >
              X
            </button>
            <span>{`${filter.column} ${filter.comparison} ${filter.value}`}</span>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Filters;
