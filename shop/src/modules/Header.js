import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../style/Header.css';
import header1 from '../images/mountainfog.jpg';
import header2 from '../images/mountainlake.jpg';
import header3 from '../images/mountainlake2.jpg';
import header4 from '../images/mountainrock.jpg';
import header5 from '../images/mountaivillage.jpg';


function Header() {
    return (

        <BrowserRouter>
            <>
                <Switch>
                    <Route path="/" render={() => (
                        <div className='header'>
                            <img src={header1} alt="mountains with fog" />
                        </div>)} />
                    <Route path="/ofert" render={() => (
                        <div className='header'>
                            <img src={header2} alt="mountains and lake" />
                        </div>)} />
                    <Route path="/opinions" render={() => (
                        <div className='header'>
                            <img src={header3} alt="mountain and fog2" />
                        </div>
                    )} />
                    <Route path="/client" render={() => (
                        <div className='header'>
                            <img src={header4} alt="rocks" />
                        </div>)} />
                    <Route path="/contact" render={() => (
                        <div className='header'>
                            <img src={header5} alt="village in mountains" />
                        </div>)} />
                    {/* na dole route do error 404 */}
                    <Route render={() => (
                        <div className='header'>
                            <img src={header3} alt="mountain and fog2" />
                        </div>)} />
                </Switch>
            </>
        </BrowserRouter >

    );
}

export default Header;
