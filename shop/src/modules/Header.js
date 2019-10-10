import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../style/Header.css';
// import header4 from '../images/mountainfog.jpg';
import header1 from '../images/mountainlake.jpg';
// import header3 from '../images/mountainlake2.jpg';
// import header2 from '../images/mountainrock.jpg';
// import header5 from '../images/mountaivillage.jpg';


const Header = () => {
    return (

        <Router>
            <Switch>
                <div>
                    <div className="logo"></div>
                    <div className="logo2"></div>
                    <Route path="/" exact render={() => (<img src={header1} className="header" alt="mountains1" />)} />
                    <Route path="/ofert" render={() => (<img src={header1} className="header" alt="mountains2" />)} />
                    <Route path="/opinions" render={() => (<img src={header1} className="header" alt="mountains3" />)} />
                    <Route path="/products" render={() => (<img src={header1} className="header" alt="mountains4" />)} />
                    <Route path="/contact" render={() => (<img src={header1} className="header" alt="mountains5s" />)} />
                </div>

            </Switch>
        </Router >

    );
}

export default Header;
