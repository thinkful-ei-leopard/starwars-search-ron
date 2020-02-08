import React, {Component} from 'react';
import ResultCharacter from './ResultCharacter';
import ApiContext from '../ApiContext';
import './Results.css';

export default class Results extends Component {
    // gets data from state
    // iterates over the list to create an individual Result 
    // each Result renders the data.

    static contextType = ApiContext;

    // perhaps for bonus, you could different components to render different data
    // ie ResultCharacter, ResultPlanet, ResultSpaceship - which all probably have different data in them.
    // then conditionally render depending a new value in state that lets us know what type of search it was (ie PATH in Form.js)
    render() {
        console.log(this.context.characters);
        return(
            <ul className="Results__container">
                {this.context.characters.map((result, idx) => {
                    return <ResultCharacter 
                                key={idx} 
                                name={result.name}
                                hairColor={result.hair_color}
                                eyeColor={result.eye_color}
                                birthYear={result.birth_year}
                                gender={result.gender}
                                />
                })}
            </ul>
        );
    }

}