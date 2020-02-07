import React from 'react';
import Form from './components/Form';
import Results from './components/Results';
import ApiContext from './ApiContext';
import ErrorPage from './ErrorPage';
import './App.css';
import config from './config';

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
  // get input from user
  // validate it
  // send API request to that URL with the string at the end (where it says r2)
  // update state -> it triggers render -> values load in DOM

  // config.API_ENDPOINT =https://swapi.co/api/
  // path = people/
  // query_string = ?search=
  // Users_input = STRING
  // all together: 
  // config.API_ENDPOINT + path + query_string + Users_input === https://swapi.co/api/people/?search=r2

  state = {
    characters: [],
  };

  handleAddCharacter = (character) => {
    console.log(character);
  }

  componentDidMount() {
  
  }

  render() {
    const contextValue = {
      addCharacter: this.addCharacter,
    };

    return (
      <ApiContext.Provider value={contextValue}>
        <div className="App">
          <h1>Test</h1>
          <ErrorPage>
            <Form />
          </ErrorPage>
          <ErrorPage>
            <Results />
          </ErrorPage>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;
