import React, { Component } from 'react';

export class SearchBar extends Component {
  state = {
    searchValue: '',
  };
  handleSearch = (event) => {
    console.log('dans la searchbar');
    this.props.callback(event.target.value);
    this.setState({ searchValue: event.target.value });
  };
  render() {
    return (
      <div>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          name="search"
          onChange={this.handleSearch}
          value={this.state.searchValue}
        />
      </div>
    );
  }
}

export default SearchBar;
