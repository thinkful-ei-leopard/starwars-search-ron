import React, {Component} from 'react';
import Results from './Results';

export default class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputText: {
                value: '',
                touched: false
            }
        };
    }


    componentDidMount() {

    }

    validateSearchText(){
    // this removes any whitespace from value and makes sure the value isn't an empty string
        const userInput = this.state.inputText.value.trim();
        if(userInput.length === 0) {
            return 'Please enter search term';
        } else if(userInput.length > 35) {
            return 'Please keep your search term under 35 characters. That should be enough for most alien languages.';
        }
    }

    addCharacter(){

    }

    handleSubmit(event){
        event.preventDefault();

    }
    
    render() {
        return(
            <form className="Form__container" onSubmit={e => this.handleSubmit(e)}>
                <h2>Star Wars API!</h2>  
                <div className="form-group">
                <label htmlFor="search-character-name">Search characters name: </label>
                <input 
                    type="text" 
                    className="Form__control"
                    name="search-character-name" 
                    id="search-character-name"
                    // Each time the user types anything into input, we update the state. This allows real-time error messages (ie before submit)
                    onChange={e => this.addCharacter(e.target.value)}
                    required/>
                {/* Conditional rendering depending on whether the user has changed the input or not */}
                {/* {this.state.name.touched && (<ValidationError message={nameError} />)} */}
                </div>

        
                <div className="Form__button__group">
                    <button 
                        type="submit" 
                        className="Form__button"
                        // if anything triggers our validation method, the button gets disabled
                        disabled={this.validateSearchText()}>
                        Save
                    </button>
                </div>
                
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