import React from 'react';
import './App.css';

// Users should be able to search for a character name
// App will make an API request to the Star Wars API
// with the response, render it out to the user
// display Matching Characters for their search. 
//    ex. search "Skywalker"
//    should RETURN "Luke Skywalker", "Anakin Skywalker", "Shmi Skywalker", etc
// --MUST deploy to Zeits Now

// BONUS:
// -Gracefully displaying a loading indicator 
//    and handling error conditions (validation, error rendering)
// -Be able to SELECT whether they want to search for planets, spaceships, vehicles, characters,
//    films, or species
// - A passing test suite

class App extends React.Component {

  // For Fetch. Search people by this: where r2 is the string you wish to search.
  // https://swapi.co/api/people/?search=r2

  state = {};

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <h1>Test</h1>
      </div>
    );
  }
}

export default App;
