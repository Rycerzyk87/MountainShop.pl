import React from 'react';

const cityList = ['zakopane', "ustroń", "wisła", "krynica-zdrój"];
const cityOptions = cityList.map(city => (
    <option>{city}</option>
))

class Offer extends React.Component {
    state = {
        city: "",
        weather: [],
        key: "99c6651300a41971c7dd60f651d33589",
    }
    // cityOptions = () => {
    //     cityList.map(item => (
    //         <option>{item}</option>
    //     ))
    // }
    getWeather = () => {

        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = `api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=${this.state.key}`;

        fetch(proxyUrl + targetUrl, {
            method: 'GET',
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    data: data
                })

            }
            );
    };

    componentDidMount() {
        this.getWeather();
    }
    render() {

        return (
            <div>
                <select>
                    {cityOptions}
                </select>
            </div>
        );
    }
}

export default Offer;

