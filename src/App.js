import React from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import AllFoodBoxes from './Components/AllFoodBoxes';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      <AllFoodBoxes />
    </div>
  );
}

export default App;
