import React from 'react';

import '../style/HomePage.css'
// import main1 from '../images/main1';
// import main2 from '../images/main2';

class HomePage extends React.Component {
    state = {
        describeHomePage: "",
        trips: "",
        customers: "",
        kilometers: "",
        like: "",
    }
    getdata = () => {
        const targetUrl = `http://localhost:3000/informations`;
        fetch(targetUrl, {
            method: 'GET',
        }).then(response => response.json())
            .then(data => {
                this.setState({
                    describeHomePage: data.describeHomePage,
                    trips: data.trips,
                    customers: data.customers,
                    kilometers: data.kilometers,
                    like: data.like,
                })
            }
            );
    }
    componentDidMount() {
        this.getdata();
    }
    render() {
        return (
            <>
                <div className="homes">
                    <h1>By endurance we conquer - lord Shackleton</h1>
                    <div className="foto foto1"></div>
                    <p className="descText">{this.state.describeHomePage}</p>
                    <div className="foto foto3"></div>
                </div>
                <div className="apiData">
                    <span>Nasze biuro to:</span>
                    <p>Zakończonych sukcesem wypraw <b>{this.state.trips}</b></p>
                    <p>Klientów, którzy z nami współpracowali: <b>{this.state.customers}</b></p>
                    <p>Razem przeszliśmy wspólnie <b>{this.state.kilometers}</b> kilometrów</p>
                    <p>Zadowolonych klientów <b>{this.state.like}</b></p>
                </div>
                <div className="foto foto2"></div>
            </>
        );
    }
}

export default HomePage;

