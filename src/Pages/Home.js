import React, { useContext, useEffect } from 'react';
// import Table from '../Components/Table';
import PlanetsContext from '../Context/PlanetsContext';

function Home() {
  const { getPlanets, planets } = useContext(PlanetsContext);
  useEffect(() => {
    getPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(planets);
  }, [planets]);

  return (
    <p>Tabela</p>
    // <table>
    //   <Table planets={ planets } />
    // </table>
  );
}

export default Home;
