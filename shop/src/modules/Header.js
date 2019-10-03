import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../style/Header.css';
import header1 from '../images/mountainfog.jpg';
import header2 from '../images/mountainlake.jpg';
import header3 from '../images/mountainlake2.jpg';
import header4 from '../images/mountainrock.jpg';
import header5 from '../images/mountaivillage.jpg';


const Header = () => {
    return (

        <Router>
            <Switch>
                <Route path="/" exact render={() => (<img src={header1} className="header" />)} />
                <Route path="/ofert" render={() => (<img src={header2} className="header" />)} />
                <Route path="/opinions" render={() => (<img src={header3} className="header" />)} />
                <Route path="/products" render={() => (<img src={header4} className="header" />)} />
                <Route path="/contact" render={() => (<img src={header5} className="header" />)} />
            </Switch>
        </Router>

    );
}

export default Header;
