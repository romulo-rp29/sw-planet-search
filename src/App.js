import React from 'react';
import './App.css';
import MyContext from './Components/MyContext';
import Table from './Components/Table';

function App() {
  return (
    <div>
      <MyContext.Provider>
        <Table />
      </MyContext.Provider>
    </div>
  );
}

export default App;
