import React from 'react';

import '../style/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="links">
                <span className="adress">42-612 Tarnowskie Góry ul. Górska 123</span>
                <a href="https://pl-pl.facebook.com" className="fa fa-facebook" target="_blank" rel="noopener noreferrer"> </a>
                <a href="https://www.instagram.com" className="fa fa-instagram" target="_blank" rel="noopener noreferrer"> </a>
                <a href="https://www.google.pl" className="fa fa-google" target="_blank" rel="noopener noreferrer"> </a>
                <a href="https://twitter.com" className="fa fa-twitter" target="_blank" rel="noopener noreferrer"> </a>
                <a href="https://pl.pinterest.com/" className="fa fa-pinterest" target="_blank" rel="noopener noreferrer"> </a>
                <span className="reserved">Copyright © 2019 Design Rycerzyk87</span>
            </div>
        </div>
    );
}

export default Footer;
