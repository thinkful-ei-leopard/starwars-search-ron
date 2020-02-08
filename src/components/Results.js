import React from 'react';
import ResultCharacter from './ResultCharacter';

export default function Results(props) {

    console.log(props);
    // gets data from state
    // iterates over the list to create an individual Result 
    // each Result renders the data.

    // perhaps for bonus, you could different components to render different data
    // ie ResultCharacter, ResultPlanet, ResultSpaceship - which all probably have different data in them.
    // then conditionally render depending a new value in state that lets us know what type of search it was (ie PATH in Form.js)
    return(
        <ul>
            {/* {props.map((result, idx) => {
                return <ResultCharacter key={idx} name={result.name}/>
            })} */}
        </ul>
    );
}