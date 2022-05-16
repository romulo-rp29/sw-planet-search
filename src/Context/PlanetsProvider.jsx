import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const tableHeads = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
    'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited',
    'URL'];

  const numericFilters = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];

  const [info, setInfo] = useState({});
  const [search, setSearch] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);
  const [order, setOrder] = useState({
    column: 'population',
    sort: 'ASC',
  });

  const [selected, setSelected] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  useEffect(() => {
    fetch(
      'https://swapi-trybe.herokuapp.com/api/planets/',
    )
      .then((response) => response.json())
      .then((data) => {
        setInfo(data);
      });
  }, []);

  const planetsResult = info.results;

  const tratarOpcoes = (option) => !activeFilters
    .find((filter) => option === filter.column);

  const sortByName = (a, b) => {
    if (order.sort === 'ASC' || a[order.column] === 'unknown') {
      return a[order.column] - b[order.column];
    }
    if (order.sort === 'DESC' || b[order.column] === 'unknown') {
      return b[order.column] - a[order.column];
    }
    return a.name.localeCompare(b.name);
  };

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

  const contextValue = {
    info,
    setInfo,
    tableHeads,
    search,
    setSearch,
    activeFilters,
    setActiveFilters,
    selected,
    setSelected,
    planetsResult,
    numericFilters,
    tratarOpcoes,
    tratarDados,
    order,
    setOrder,
    sortByName,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf({}),
}.isRequired;

export default PlanetsProvider;
