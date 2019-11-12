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
    componentWillUnmount() {
        this.getCurrency();
    }
    render() {
        const { dollar, euro, rupia, rubel, yuan, jen } = this.state;
        return (
            <div className="currency">
                <h3>Kursy walut:</h3>
                <p>Dolar <span className="symbol">&#36; </span>: <span> {dollar} PLN</span></p>
                <p>Euro <span className="symbol">&#8364; </span>: <span> {euro} PLN</span></p>
                <p>Rupia <span className="symbol">&#8381; </span>: <span> {rupia} PLN</span></p>
                <p>Rubel <span className="symbol">&#8381; </span>: <span> {rubel} PLN</span></p>
                <p>Juan <span className="symbol">&#20803; </span>: <span> {yuan} PLN</span></p>
                <p>Jen <span className="symbol">&#165; </span>: <span> {jen} PLN</span></p>
            </div>
        );
    }
}

export default Currency;
