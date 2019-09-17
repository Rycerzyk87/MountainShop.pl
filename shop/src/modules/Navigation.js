import React from 'react';
import Clock from './Clock';
import HomePage from '../pages/HomePage';
import Offer from '../pages/Offer';
import Opinions from '../pages/Opinions';
import Client from '../pages/Client';
import Contact from '../pages/Contact';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import '../style/Navigation.css';

const Navigation = () => {

    return (

        <Router>
            <div className="main">
                <nav className="link">
                    <ul>
                        <li><Link to="/">Start</Link></li>
                        <li><Link to="/ofert">Oferta</Link></li>
                        <li><Link to="/opinions">Opinie</Link></li>
                        <li><Link to="/client">Strefa klienta</Link></li>
                        <li><Link to="/contact">Kontakt</Link></li>
                        <div className="clock"><Clock /></div>
                    </ul>
                </nav>
                <section className="content">
                    <Route path="/" component={HomePage} />
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
