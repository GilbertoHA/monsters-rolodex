import React, { Component } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import CardList from './components/CardList/CardList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { monsters: [], searchInput: '' };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((error) => console.log(error));
  }

  searchHandler = (evt) => {
    this.setState({ searchInput: evt.target.value });
  };

  render() {
    const { monsters, searchInput } = this.state;
    const filteredMonsters = monsters.filter(
      (monster) =>
        monster.name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1 ||
        monster.email.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
    );

    return (
      <div className="app">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          searchInput={searchInput}
          placeholder="Search monsters"
          onFiltered={this.searchHandler}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
