import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import jangoFetchData from '../services/planetsAPI';

export default function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  async function getPlanets() {
    const dataResponse = await jangoFetchData(planets);
    setPlanets(dataResponse);
  }

  const contextValue = {
    getPlanets,
    planets,
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
