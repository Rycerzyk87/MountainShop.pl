import React from 'react';

const cityList = [
    { name: 'Katmandu', eng: 'Kathmandu', description: "katma", data: { a: 1, b: 2, c: 3, d: 4, e: 4 } },
    { name: 'Elbrus', eng: 'Elbrus', description: "elbrus", data: { a: 1, b: 2, c: 3, d: 4, e: 4 } },
    { name: 'Chamonix', eng: 'Chamonix-mont-blanc', description: "chamoni", data: { a: 1, b: 2, c: 3, d: 4, e: 4 } },
    { name: 'Saint Helens', eng: 'Saint Helens', description: "saint", data: { a: 1, b: 2, c: 3, d: 4, e: 4 } },
    { name: 'Esmeralda', eng: 'Esmeralda', description: "esmeralda", data: { a: 1, b: 2, c: 3, d: 4, e: 4 } },
    { name: 'Tarnowskie Góry', eng: 'Tarnowskie Góry', description: "tarnowskie", data: { a: 1, b: 2, c: 3, d: 4, e: 4 } }];

const cityOptions = cityList.map(city => (
    <option key={city.name} value={city.eng} data={city}>{city.name}</option>
))

class Offer extends React.Component {

    state = {
        city: "",
        temp: "",
        press: "",
        wind: "",
        description: "",
        cityData: {},

        key: "99c6651300a41971c7dd60f651d33589",
    }

    getWeather = () => {

        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = `api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=${this.state.key}`;

        fetch(proxyUrl + targetUrl, {
            method: 'GET',
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    temp: Math.floor(data.main.temp / 31),
                    press: data.main.pressure,
                    wind: data.wind.speed,
                })

            }
            );
    };

    // componentDidMount() {
    //     this.getWeather();
    // }
    componentDidUpdate() {
        this.getWeather();
    }

    render() {
        return (
            <div>
                <span>Cel wyprawy: </span>
                <select onChange={(e) => this.setState({
                    city: e.target.value,
                    cityData: e.target.data,
                })}>
                    {cityOptions}
                </select>
                {this.state.city.length !== 0 ?
                    <div className="weather">
                        <p>Bieżące warunki pogodowe:</p>
                        <span>Tempertura : <b>{this.state.temp}</b> &#8451;  Ciśnienie atmosferyczne: <b>{this.state.press}</b> hPa Siła wiatru: <b>{this.state.wind}</b> m/s</span>
                        {/* <p>{this.state.description}</p> opis zrobic */}
                    </div> :
                    <div className="chooseCity">
                        Wybierz cel swojej wyprawy!!!
                        </div>
                }
            </div >
        );
    }
}

export default Offer;

