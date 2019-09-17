import React from 'react';
import Clock from './Clock';
import { Link, Router } from 'react-router-dom';

import '../style/Navigation.css';

const Navigation = () => {

    return (
        <nav className="main">
            <ul>
                <li>Start</li>
                <li>Oferta</li>
                <li>Opinie</li>
                <li>Strefa klienta</li>
                <li>Kontakt</li>
                <li className="clock"><Clock /></li>
            </ul>

        </nav>

    )
}


export default Navigation;
