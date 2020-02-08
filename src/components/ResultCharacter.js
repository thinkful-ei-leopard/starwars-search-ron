import React from 'react';

export default function ResultCharacter(props) {
    // props:
    //  props.name
    //  props.hairColor
    //  props.eyeColor
    //  props.birthYear
    //  props.gender

    return (
        <li className="ResultCharacter__list">
            <p>{'Name: ' + props.name}</p>
            <p>{props.gender}</p>
            <p>{`Hair color: ${props.hairColor}, Eye color: ${props.eyeColor}`}</p>
            <p>{`Birth year: ${props.birthYear}`}</p>
        </li>
    );
}