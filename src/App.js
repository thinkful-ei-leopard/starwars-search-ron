import React from 'react';
import Form from './components/Form';
import Results from './components/Results';
import ApiContext from './ApiContext';
import ErrorPage from './ErrorPage';
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
  // get input from user
  // validate it
  // send API request to that URL with the string at the end (where it says r2)
  // update state -> it triggers render -> values load in DOM

  state = {
    characters: [],
    loading: false // Extra state - tells us whether we are loading
  };

  handleAddCharacters = (characters) => {
    this.setState({
      characters
    })
    console.log(this.state.characters);
  }

  componentDidMount() {
    
  }

  render() {
    const contextValue = {
      addCharacter: this.handleAddCharacters,
      characters: this.state.characters
    };

    return (
      <ApiContext.Provider value={contextValue}>
        <div className="App">
          <h1>Star Wars Search App!</h1>
          <h3>A long time ago, in an API far, far away...</h3>
          <ErrorPage>
            <Form />
          </ErrorPage>
          <ErrorPage>
            {/* {might need conditional rendering here, if characters is empty && Results} */}
            <Results />
          </ErrorPage>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;
