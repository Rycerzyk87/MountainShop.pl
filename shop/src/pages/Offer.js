import React from 'react';

const cityList = [
    { name: 'Katmandu', eng: 'Kathmandu', description: "katma asa asdas asdas" },
    { name: 'Elbrus', eng: 'Elbrus', description: "elbru asdas asdas asds" },
    { name: 'Chamonix', eng: 'Chamonix-Mont-Blanc', description: "chamoni asdas asas" },
    { name: 'Saint Helens', eng: 'Saint Helens', description: "saint asdasdasdasd" },
    { name: 'Esmeralda', eng: 'Esmeralda', description: "esmeralda asdasds " },
    { name: 'Tarnowskie Góry', eng: 'Tarnowskie Góry', description: "tarnowskiea asdas asdas" }];

const cityOptions = cityList.map(city => (
    <option key={city.name} value={city.eng} >{city.name}</option>
))

class Offer extends React.Component {

    state = {
        city: "Kathmandu",
        temp: "",
        press: "",
        wind: "",
        description: "",

        key: "99c6651300a41971c7dd60f651d33589",
    }

    // getDescription = () => {
    //     this.setState({
    //         description: this.city.value,
    //     })
    // }

    getWeather = () => {

        // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=${this.state.key}`;
        console.log(targetUrl)
        fetch(targetUrl, {
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

    componentDidMount() {
        this.getWeather()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.city !== this.state.city)
            this.getWeather()
    }

    render() {
        return (
            <div>
                <span>Cel wyprawy: </span>
                <select onChange={(e) => this.setState({
                    city: e.target.value,
                    description: e.target.description,
                })}>
                    {cityOptions}
                </select>
                {this.state.city.length !== 0 ?
                    <div className="weather">
                        <p>Bieżące warunki pogodowe:</p>
                        <span>Tempertura : <b>{this.state.temp}</b> &#8451;  Ciśnienie atmosferyczne: <b>{this.state.press}</b> hPa Siła wiatru: <b>{this.state.wind}</b> m/s</span>
                        <p>{this.state.description}</p>
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

