import React from 'react';
import Navigation from './Navigation';
import Page from './Page';


import '../style/Main.css';

function Main() {
    return (
        <div className="main">
            <Navigation />
            <Page />
        </div>
    );
}

export default Main;
