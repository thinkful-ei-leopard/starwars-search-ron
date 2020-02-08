import React from 'react';
import './ValidationError.css';

export default function ValidationError(props) {
    // If message is a string, display the message, otherwise if it is undefined return an empty fragment.
    if(props.message) {
        return (
            <div className="validation_error">{props.message}</div>
        );
    }

    return <></>;
}