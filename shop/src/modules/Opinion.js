import React from 'react';

function Opinion(props) {

    return (
        <li className="opinion">
            <p className="text">{props.opinion.text}</p>
            <span className="name">{props.opinion.name}</span>
            <span className="note">{props.opinion.note}</span>

        </li>
    );
}

export default Opinion;