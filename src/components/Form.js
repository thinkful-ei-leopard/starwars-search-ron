import React, {Component} from 'react';
import Results from './Results';

export default class Form extends Component {
    state = {};

    componentDidMount() {

    }

    handleSubmit(event){
        event.preventDefault();

    }
    
    render() {
        return(
            <form className="Form__container" onSubmit={e => this.handleSubmit(e)}>
                <h2>Search Star wars!</h2>
            </form>
        );
    }
}

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