import React/* , { useContext, useEffect } */ from 'react';
import './App.css';
import Table from './components/Table';
// import PlanetsProvider from './context/PlanetsProvider';
// import PlanetsContext from './context/PlanetsContext';

function App() {
  // const { getPlanets, planets } = useContext(PlanetsContext);
  // useEffect(() => {
  //   getPlanets();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   console.log(planets);
  // }, [planets]);
  return (
    <div>
      <Table />
    </div>
  );
}

export default App;
