import React from 'react';
import { Link, Router } from 'react-router-dom';

import '../style/Navigation.css';
const list = [
    { name: "start", path: "./", exact: true },
    { name: "produkty", path: "./" },
    { name: "kontakt", path: "./" },
    { name: "panel klienta", path: "./" },
]
const Navigation = () => {
    const menu = list.map(item => (
        <li key={item.name}>
            <Router>
                <Link to={item.path} exact={item.exact ? item.exact : false}>{item.name}</Link>
            </Router>
        </li>
    ))

    return (
        <nav className="main">
            <ul>

                {menu}

            </ul>
        </nav>
    )
}


export default Navigation;
