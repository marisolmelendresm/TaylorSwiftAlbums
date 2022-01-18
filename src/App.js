import './App.css';

import { CardList  } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import React, {Component} from 'react'

class App extends Component {
  constructor () {
      super();

      this.state = {
        monsters: [],
        searchField: ""
      };
  }

  componentDidMount () {
    fetch('https://my-json-server.typicode.com/marisolmelendresm/TaylorSwiftAlbums/albums')
      .then(response => response.json())
      .then(albums => this.setState({ monsters: albums }))
  }

  render () {
    const { monsters, searchField } = this.state;
    const filteredAlbums = monsters.filter(album => album.title.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1> Taylor Swift Albums </h1>
        <SearchBox placeholder="search albums" handleChange= {e => this.setState({searchField: e.target.value})}>
        </SearchBox>
        <CardList albums={filteredAlbums}>
        </CardList>
        
      </div>
    );
  }
    
}

export default App;
