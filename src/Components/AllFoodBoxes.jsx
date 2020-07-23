import React, { Component } from 'react';
import foods from '../foods.json';
import FoodBox from './FoodBox';
import SearchBar from './SearchBar';

export default class AllFoodBoxes extends Component {
  state = {
    searchedValue: '',
  };

  getSearch = (searched) => {
    this.setState({ searchedValue: searched });
  };

  render() {
    let filteredFoods;
    if (this.state.searchedValue === '') {
      filteredFoods = foods;
    } else {
      filteredFoods = foods.filter((food) =>
        food.name.includes(this.state.searchedValue)
      );
    }

    return (
      <div>
        <SearchBar callback={this.getSearch} />
        {filteredFoods.map((food, i) => {
          return <FoodBox key={i} food={food}></FoodBox>;
        })}
      </div>
    );
  }
}
