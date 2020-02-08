import React from 'react';

export default function ResultCharacter(props) {

    // destructing the array. blank spaces are skipped values.
    //const [name, , , hair_color, , eye_color, birth_year, gender, homeworld, ...rest] = props;
    // console.log(rest);

    return (
        <li>
            <p>{props.name}</p>
            {/* <p>{name}
            {hair_color}
            {eye_color}
            {birth_year}
            {gender}
            {homeworld}
            </p> */}
        </li>
    );
}