import React, { Component } from "react";
import '../style/Currency.css'

class Currency extends Component {
    state = {
        dollar: "",
        euro: "",
        rupia: "",
        rubel: "",
        yuan: "",
        jen: "",
    }

    getCurrency() {
        const targetUrl = `https://api.ratesapi.io/api/latest?base=PLN`;
        fetch(targetUrl, {
            method: 'GET',
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    dollar: data.rates.USD.toFixed(4),
                    euro: data.rates.EUR.toFixed(4),
                    rupia: data.rates.INR.toFixed(4),
                    rubel: data.rates.RUB.toFixed(4),
                    yuan: data.rates.CNY.toFixed(4),
                    jen: data.rates.JPY.toFixed(4),

                })
            }
            );
    }
    componentDidMount() {
        this.getCurrency();
    }
    render() {
        const { dollar, euro, rupia, rubel, yuan, jen } = this.state;
        return (
            <div className="currency">
                <h3>Kursy walut:</h3>
                <p>Dollar <span className="symbol">&#36;</span>: <span>{dollar}</span></p>
                <p>Euro <span className="symbol">&#8364;</span>: <span>{euro}</span></p>
                <p>Rupia <span className="symbol">&#8381;</span>: <span>{rupia}</span></p>
                <p>Rubel <span className="symbol">&#8381;</span>: <span>{rubel}</span></p>
                <p>Juan <span className="symbol">&#20803;</span>: <span>{yuan}</span></p>
                <p>Jen <span className="symbol">&#165;</span>: <span>{jen}</span></p>
            </div>
        );
    }
}

export default Currency;
