import React from 'react';

import '../style/HomePage.css'
// import main1 from '../images/main1';
// import main2 from '../images/main2';

class HomePage extends React.Component {
    state = {
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
                    <p className="descText"> Od 2005 roku regularnie prowadzimy wyprawy górskie. Naszą perełką są wyprawy na Kilimandżaro. Każdego roku ponad 150 osób - kilkanaście wypraw - zdobywa najwyższy szczyt Czarnego Lądu z naszym udziałem. W 2007 roku poprowadziliśmy medialną wyprawę z udziałem fotografów i dziennikarzy na najwyższy szczyt Afryki - Bergson Men'sHealth Kilimanjaro 2007 Expedition, zakończoną sukcesem. W 2012 roku zorganizowaliśmy wyjątkową wyprawę na Kilimandżaro będącą rekonesansem pod produkcję filmową dla telewizji polskiej. Tematem filmowym paradoksalnie nie było wejście na Kilimandżaro, a coś znacznie więcej... Zespół reżyserów, operatorów i scenarzystów dotarł na szczyt Kilimandżaro w komplecie. Bazując na naszym doświadczeniu i zaufaniu zdobytym w mediach proponujemy Tobie różne programy. Uwzględniamy odmienne oczekiwania i zainteresowania związane z wyprawą do Afryki na Kilimandżaro.
                    Dla części uczestników naszych wypraw, Kilimandżaro to początek wielkiej przygody z podróżami w góry świata. Organizujemy nieprzerwanie wyprawy górskie na szczyty wszystkich kontynentów, prowadziliśmy trekkingi we wszystkich górach świata. Nasz doświadczony zespół liderów to nie tylko profesjonaliści posiadający szeroką wiedzę, ale też ludzie obdarzeni umiejętnościami interpersonalnymi, osoby z którymi będziesz chciał pojechać na kolejną wyprawę. To bowiem od nich, w znaczącej części, zależy Twoje zadowolenie z wyjazdu.
                    Wśród organizowanych przez nas wyjazdów odnajdziesz standardowe i najpopularniejsze wyprawy górskie i trekkingowe. Dostrzeżesz i takie wyprawy górskie, których nie organizuje nikt poza nami, a nierzadko przebieg i tych klasycznych wypraw jest przez nas modyfikowany o niestandardowe atrakcje, którymi chcemy poprawić wyjątkowość wyjazdu z nami. Starannie dopracowujemy każdy szczegół. Dbamy o jakość współpracy lokalnych kontrahentów, niezwykle ważną dla ogólnego komfortu i poczucia bezpieczeństwa uczestnika wyprawy. </p>
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

