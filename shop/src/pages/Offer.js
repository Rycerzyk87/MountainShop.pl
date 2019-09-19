import React from 'react';

const cityList = [{ name: 'Katmandu', eng: 'Kathmandu' }, { name: 'Elbrus', eng: 'Elbrus' }, { name: 'Chamonix', eng: 'Chamonix-mont-blanc' },
{ name: 'Saint Helens', eng: 'Saint Helens' }, { name: 'Esmeralda', eng: 'Esmeralda' }, { name: 'Tarnowskie Góry', eng: 'Tarnowskie Góry' }];
const cityOptions = cityList.map(city => (
    <option key={city.name} value={city.eng}>{city.name}</option>
))

class Offer extends React.Component {

    state = {
        city: "",
        weather: [],
        temp: "",
        press: "",
        wind: "",

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
                    weather: data,
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
        // zrobić ifa czy city === ""
        return (
            <div>
                <span>Wybierz cel swojej wyprawy: </span>
                <select onChange={(e) => this.setState({ city: e.target.value })}>
                    {cityOptions}
                </select>

                <div className="weather">
                    <p>Bieżące warunki pogodowe:</p>
                    <span>Tempertura : <b>{this.state.temp}</b> &#8451;  Ciśnienie atmosferyczne: <b>{this.state.press}</b> hPa Siła wiatru: <b>{this.state.wind}</b> m/s</span>

                </div>
            </div >
        );
    }
}

export default Offer;

