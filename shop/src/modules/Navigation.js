import React from 'react';
import Clock from './Clock';
import HomePage from '../pages/HomePage';
import Offer from '../pages/Offer';
import Opinions from '../pages/Opinions';
import Client from '../pages/Client';
import Contact from '../pages/Contact';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

import '../style/Navigation.css';

const Navigation = () => {

    return (

        <Router>
            <div className="main">
                <nav className="link">
                    <ul>
                        <li><NavLink to="/" exact>Start</NavLink></li>
                        <li><NavLink to="/ofert">Oferta</NavLink></li>
                        <li><NavLink to="/opinions">Opinie</NavLink></li>
                        <li><NavLink to="/client">Strefa klienta</NavLink></li>
                        <li><NavLink to="/contact">Kontakt</NavLink></li>
                        <div className="clock"><Clock /></div>
                    </ul>
                </nav>
                <section className="content">
                    <Route path="/" exact component={HomePage} />
                    <Route path="/ofert" component={Offer} />
                    <Route path="/opinions" component={Opinions} />
                    <Route path="/client" component={Client} />
                    <Route path="/contact" component={Contact} />
                </section>
            </div>
        </Router>


    )
}


export default Navigation;
