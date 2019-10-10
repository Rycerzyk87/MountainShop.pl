import React from 'react';
import Clock from './Clock';
import HomePage from '../pages/HomePage';
import Offer from '../pages/Offer';
import Opinions from '../pages/Opinions';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import Currency from './Currency';

import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

import '../style/Navigation.css';

const list = [
    { name: "start", path: "/", exact: true },
    { name: "Oferta", path: "/ofert" },
    { name: "Opinie", path: "/opinions" },
    { name: "Produkty", path: "/products" },
    { name: "Kontakt", path: "/contact" },
]


const Navigation = () => {

    const menuList = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))

    return (

        <Router>
            <div className="main">
                <nav className="link">
                    <ul>
                        {menuList}
                        <div className="clock"><Clock /></div>
                        <div className="currebcy"><Currency /></div>
                        <div className="logoNav"></div>
                    </ul>
                </nav>
                <section className="content">
                    <Route path="/" exact component={HomePage} />
                    <Route path="/ofert" component={Offer} />
                    <Route path="/opinions" component={Opinions} />
                    <Route path="/products" component={Products} />
                    <Route path="/contact" component={Contact} />
                </section>
            </div>
        </Router>


    )
}


export default Navigation;
