import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {render} from 'react-dom';
import {Results} from './components/Result';
import {Search} from './components/Search';
import data from './data.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      results: []
    }
  }

  _searchChange(e) {
    let results = [];
    if (e.target.value) {
      Object.keys(data).forEach(country => {
        const found = data[country].filter(city=> {
          return city.toLowerCase().startsWith(e.target.value.toLowerCase())
        });

        if (results.length < 100) {
          results = found.reduceRight((coll, item) => {
            coll.unshift(item);
            return coll;
          }, results);
        }
      });
    }
    this.setState({ results: results });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
        <Search onChange={this._searchChange.bind(this)} />
        </div>
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default App;
