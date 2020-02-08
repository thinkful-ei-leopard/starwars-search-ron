import React from 'react';
import './ResultCharacter.css';

export default function ResultCharacter(props) {
    // props:
    //  props.name
    //  props.hairColor
    //  props.eyeColor
    //  props.birthYear
    //  props.gender

    return (
        <li className="ResultCharacter__list">
            <p className="result_name">{'Name: ' + props.name}</p>
            <p className="result_name">{props.gender}</p>
            <p className="result_name">{`Hair color: ${props.hairColor}, Eye color: ${props.eyeColor}`}</p>
            <p className="result_name">{`Birth year: ${props.birthYear}`}</p>
        </li>
    );
}