import React from 'react';
import './App.css';
import PlanetsProvider from './Context/PlanetsProvider';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <PlanetsProvider>
        <Home />
      </PlanetsProvider>
    </div>
  );
}

export default App;
