import React from 'react';
import Filters from './Components/Filters';
import Table from './Components/Table';
import PlanetsProvider from './Context/PlanetsProvider';

function App() {
  return (
    <div className="App">
      <PlanetsProvider>
        <Filters />
        <Table />
      </PlanetsProvider>
    </div>
  );
}

export default App;
