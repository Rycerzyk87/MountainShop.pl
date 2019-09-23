import React from 'react';

function Opinion(props) {
    const { note, text, stayDate, name } = props.opinion;
    return (
        <li className="opinion">
            <p className="note">Ocena: <span >{note}</span></p>
            <p className="text">{text}</p>
            <p className="date">termin pobytu: <span >{stayDate}</span></p>
            <p className="name">{name}</p>

        </li>
    );
}

export default Opinion;