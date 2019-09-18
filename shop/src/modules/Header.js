import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../style/Header.css';
import header1 from '../images/mountainfog.jpg';
import header2 from '../images/mountainlake.jpg';
import header3 from '../images/mountainlake2.jpg';
import header4 from '../images/mountainrock.jpg';
import header5 from '../images/mountaivillage.jpg';


function Header() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact render={() => (<img src={header1} alt="mountains with fog" />)} />
                <Route path="/ofert" render={() => (<img src={header2} alt="mountains and lake" />)} />
                <Route path="/opinions" render={() => (<img src={header3} alt="mountain and fog2" />)} />
                <Route path="/client" render={() => (<img src={header4} alt="rocks" />)} />
                <Route path="/contact" render={() => (<img src={header5} alt="village in mountains" />)} />
                {/* na dole route do error 404 */}
                <Route render={() => (<img src={header3} alt="mountain and fog2" />)} />
            </Switch>
        </Router >

    );
}

export default Header;
