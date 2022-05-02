import React from 'react';
import Table from './Components/Table';
import PlanetsProvider from './Context/PlanetsProvider';

function App() {
  return (
    <div className="App">
      <PlanetsProvider>
        <Table />
      </PlanetsProvider>
    </div>
  );
}

export default App;
