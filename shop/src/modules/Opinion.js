import React from 'react';

function Opinion(props) {

    return (
        <li className="opinion">
            <p className="note">Ocena: <span >{props.opinion.note}</span></p>
            <p className="text">{props.opinion.text}</p>
            <p className="date">termin pobytu: <span >{props.opinion.stayDate}</span></p>
            <p className="name">{props.opinion.name}</p>

        </li>
    );
}

export default Opinion;