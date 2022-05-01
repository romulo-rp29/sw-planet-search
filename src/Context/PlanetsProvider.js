import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const tableHeads = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
    'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited',
    'URL'];

  const [info, setInfo] = useState({});

  // const jangoFetchData = async () => {
  //   await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response);
  //     });
  // };

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
      });
  });

  const contextValue = {
    info,
    setInfo,
    tableHeads,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default PlanetsProvider;
