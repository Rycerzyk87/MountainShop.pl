import React from 'react';
import '../style/Offer.css'

import foto1 from '../images/katmandu.jpg';
import foto2 from '../images/elbrus.jpg';
import foto3 from '../images/chamonix.jpg';
import foto4 from '../images/saint.jpg';
import foto5 from '../images/esmeralda.jpg';
import foto6 from '../images/tarnowskie.jpg';

const cityList = [
    { name: 'Katmandu', eng: 'Kathmandu', },
    { name: 'Elbrus', eng: 'Elbrus', },
    { name: 'Chamonix', eng: 'Chamonix-Mont-Blanc', },
    { name: 'Saint Helens', eng: 'Saint Helens', },
    { name: 'Esmeralda', eng: 'Esmeralda', },
    { name: 'Tarnowskie Góry', eng: 'Tarnowskie Góry', }];

const cityOptions = cityList.map(city => (
    <option key={city.name} value={city.eng} data={city.description}>{city.name}</option>
))

class Offer extends React.Component {

    state = {
        city: "",
        temp: "",
        press: "",
        wind: "",
        class: "contactWithUs",
       

        key: "99c6651300a41971c7dd60f651d33589",
    }


    getWeather = () => {

        const targetUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=${this.state.key}`;
        fetch(targetUrl, {
            method: 'GET',
        }).then(response => response.json())
            .then(data => {
                this.setState({
                    temp: Math.floor(data.main.temp - 273),
                    press: data.main.pressure,
                    wind: data.wind.speed,

                })

            }
            );
    };
    handleCloseClick = (event) => {
        event.preventDefault()
        this.setState({
            class: "none",
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.city !== this.state.city)
            this.getWeather()
    }
    render() {
        return (
       
            <div>
                <span className="select">Cel wyprawy: </span>
                <select onChange={(e) => this.setState({
                    city: e.target.value,
                                  })}>
                    {cityOptions}
                </select>
                {this.state.city.length !== 0 ?
                    <div className="weather">
                        <p>Bieżące warunki pogodowe:</p>
                        <span>Tempertura : <b>{this.state.temp}</b> &#8451;  Ciśnienie atmosferyczne: <b>{this.state.press}</b> hPa Siła wiatru: <b>{this.state.wind}</b> m/s</span>
                        <a href="http://localhost:3000/contact" className={this.state.class}><button className="close" onClick={this.handleCloseClick}>x</button><p>Chcesz więcej?</p><p>Napisz do nas.</p>
                     </a>
                    </div> 
                    :
                    <div className="chooseCity">
                        Wybierz cel swojej wyprawy!!!
                    </div>
                }
                
                <div className="description">
                     {this.state.city === "Kathmandu" ? <div><div className="foto"><img src={foto1} alt="Temple"></img></div><p>Katmandu to stolica i największe miasto Nepalu – mieszka w nim około miliona osób. Dolina Katmandu ucierpiała w trzęsieniu ziemi w 2015 roku i do tej pory na każdym kroku widać jego ślady. Na pierwszy rzut oka Katmandu to miasto, z którego powinno się uciekać, ale tak nie jest. Katmandu pomimo wszystko urzeka. Męczy, ale fascynuje. Jest w tym mieście coś magicznego, magnetyzującego. W Dolinie Katmandu znajdują się trzy królewskie miasta Katmandu, Patan i Bhaktapur – każde z nich ma swój Durbar Square i wszystkie trzy place znajdują się obecnie na liście UNESCO. Trudno powiedzieć, który z nich jest najpiękniejszy – wydaje mi się, że każdy jest wart odwiedzenia. Niestety wiele świątyń zostało kompletnie zniszczonych podczas trzęsienia ziemi w 2015 roku. Oczywiście oprócz tej mistycznej strony jest i druga strona medalu – wokół stupy kwitnie w najlepsze biznes pamiątkarski, jednak zdecydowanie jest w tle, nie irytuje. Jeśli tam będziecie skręćcie w wąską uliczkę z prawej strony stupy – jest tam kawiarnia, która ma taras na dachu. Idealne miejsce na odpoczynek i wypicie lassi oraz delektowanie się widokiem stupy i Katmandu. Warto odiwedzić:
                    <br></br>THAMEL – turystyczna dzielnica pełna hoteli, restauracji i sklepów. Bez problemu zakupisz tu pamiątki, używane książki w różnych językach lub zjesz przysmaki z całego świata. Thamel bywa też hałaśliwy i męczący więc na każdym rogu można złapać rikszę lub taksówkę i uciec w spokojniejsze rejony Katmandu.<br></br>INDRA CHOWK –  jest to również dzielnica pełna sklepów, ale miejscowych. Na placu Indra Chowk krzyżuje się sześć ulic. Jest to raczej jeden duży uliczny targ, gdzie można kupić wszystko: od butów, przez pralki, aż do warzyw. Między ulicami pełnymi towarów znajdują się małe kapliczki. Warto odwiedzić, aby zrobić zakupy i zobaczyć codzienne życie miejscowych.<br></br>KATMANDU DURBAR SQUARE – to plac znajdujący się przed starym pałacem królewskim byłego Królestwa Katmandu. Jest jednym z trzech takich placów w Dolinie Katmandu, które są wpisane na listę światowego dziedzictwa UNESCO. Na środku znajduje się pałac królewski, który przekształcony został w muzeum. Oprócz pałacu znajdziemy tu strzeliste pagody, posągi i wiele innych miejsc kultu zarówno hinduistów, jak i buddystów. Wstęp na plac kosztuje 750 NPR (25 PLN), bilet jest jednodniowy, jednak na podstawie biletu można wyrobić sobie przepustkę, upoważniającą do wchodzenia na teren placu na okres ważności wizy (wyrabia się w biurze na terenie Durbaru, potrzebne jedno zdjęcie paszportowe).
    
                    </p></div> : null}
                    {this.state.city === "Elbrus" ? <div><div className="foto"><img src={foto2} alt="Elbrus"></img></div><p>
                    Góra Szczęścia, Góra Światła lub Władca Wichrów, to tylko jedne z wielu określeń naszego głównego celu – najwyższego szczytu Rosji i Kaukazu, położonego na terenie Kabardyno-Bałkarii.Elbrus to wygasły wulkan prawie w całości pokryty lodowcami i wiecznym śniegiem, o dwóch szczytach: zachodnim (5642 m) i wschodnim (5621 m), które oddzielone są od siebie przełęczą na 5416 m, czyli z różnicą wypiętrzenia zaledwie 21 m.Góra jest technicznie łatwa, dlatego też bywa lekceważona, a ponieważ Elbrus jest wyższy od sąsiadujących szczytów o prawie 2 km podatny jest na gwałtowne zmiany pogody, w tym silne wiatry i niskie temperatury, a przy znacznym zamgleniu jest trudny w orientacji. Droga do góry zazwyczaj nie wymaga użycia specjalistycznego sprzętu, a jedynie raków i kijków. Po zdobyciu szczytu likwidujemy obóz w drodze zejściowej i wracamy do doliny. Powrót odbywa się tą samą trasą. Przy dobrej pogodzie czeka nas wspaniała panorama Kaukazu, a nawet hen w oddali można dojrzeć Morze Czarne. yprawy na Elbrus to świetny sposób na poznanie siebie i swojej wytrzymałości na wysokości przekraczającej 5600 m, wpływu wysokości na organizm, sprawdzenie umiejętności współpracy w grupie, a przede wszystkim doskonały trening przed wyprawą na jakąś większą górę, np. w Himalajach czy Andach. Najwięksi światowi alpiniści uważają, że to właśnie Elbrus jest najwyższy w Europie i dlatego wyprawa nań oraz jego zdobycie jest wymagane do skompletowania tak zwanej „Korony Ziemi”, czyli najwyższych wierzchołków wszystkich kontynentów. A jak czasu wystarczy i wracać do kraju będziemy przez Tbilisi w Gruzji, to czeka nas fascynująca metropolia - „Perła Kaukazu”, która oferuje wspaniałe zabytki, gdzie ludzie są tu nad wyraz gościnni, a samo miejsce malowniczo położone gdzieś na pograniczu Europy i Azji, a dokładnie w Dolinie Tbiliskiej, gdzie rozciąga się wąskim pasem na długości prawie 30 kilometrów w dolinie rzeki Kury i na zboczach otaczających ją gór Kaukazu Małego.
                    </p></div>  : null}
                    {this.state.city === "Chamonix-Mont-Blanc" ? <div><div className="foto"><img src={foto3} alt="Aiguille du Midi"></img></div><p>
                    Tracisz czas w Alpach Francuskich i odkrywasz ich wiele gór, wysokie klify i panoramiczne widoki. Nie ma nigdzie takich jak Mont Blanc i Chamonix Valley! Zwiedź niesamowity, znany na całym świecie górski kurort Chamonix-Mont-Blanc. Wybierz się minibusem klasy biznes na odkrywanie imponujących szczytów, majestatycznych lodowców i malowniczego alpejskiego miasteczka Chamonix.             Gmina Chamonix-Mont-Blanc obejmuje 16 wiosek, rozciągających się od północy na południe są to: Le Tour, Montroc, Le Planet, Argentière, Les Chosalets, Le Lavancher, Les Tines, Les Bois, Les-Praz-de-Chamonix, Chamonix-Mont-Blanc, Les Pècles, Les Mouilles, Les Barrats, Les Pélerins, Les Gaillands i Les Bossons. Położenie Chamonix wśród gór sprawia, iż w samym środku lata promienie słoneczne padają na miasto przez zaledwie 5-7 godzin dziennie. 
                    </p></div>  : null}
                    {this.state.city === "Saint Helens" ? <div><div className="foto"><img src={foto4} alt="Mount Saint Helens"></img></div><p>
                    Wulkan Góra Świętej Heleny - trzeci pod względem rozmiarów erupcji - to czynny wciąż wulkan w USA. Liczy około 40 tys. lat i jest jednym z młodszych i najbardziej aktywnych wulkanów w Górach Kaskadowych. Swoją złą sławę zawdzięcza spektakularnej erupcji z 1980 r. Była to jedna z pierwszych erupcji przewidzianych przez służby wulkanologiczne - poprzedziło ją powstanie wybrzuszenia na północnym stoku i liczne trzęsienia ziemi. Jedno z nich spowodowało osunięcie się całego północnego boku góry, co było największym zarejestrowanym osuwiskiem w historii. Erupcja wyrzuciła w powietrze prawie jedną trzecią objętości góry i miała siłę około 400 megaton trotylu, czyli 20 tys. razy większą niż pierwsza bomba atomowa zrzucona na Hiroszimę. Spowodowała całkowite zniszczenie ponad 600 km kw. lasu, a kolejne 300 km kw. nieodwracalnie zmieniła. Słup popiołu miał wysokość 18 kilometrów, 800 tys. metrów sześciennych pyłu i popiołu spadło tylko na samo miasto Yakima. Dzięki zainstalowanym instrumentom pomiarowym i badawczym erupcję przewidziano na ponad dwa tygodnie wcześniej. Udało się ewakuować mieszkańców okolic, ale i tak zginęło 57 osób, głównie drwali i samotników mieszkających w borach. Zniszczonych zostało 250 domów. Od 1980 roku wulkan Świętej Heleny sporadycznie daje oznaki aktywności.
                    </p></div>  : null}
                    {this.state.city === "Esmeralda" ? <div><div className="foto"><img src={foto5} alt="Nevada desert"></img></div><p>Hrabstwo w południowo-zachodniej części stanu Nevada. Gęstość zaludnienia wynosi ok. 0,1 osoby na km². Stolicą jest Goldfield. Esmeralda jest jednym z dziewięciu pierwotnych hrabstw Terytorium Nevady utworzonych w 1861. Jego nazwa znaczy po hiszpańsku szmaragd. Nadał ją jeden z pierwszych górników w tych okolicach J. M. Corey, prawdopodobnie na cześć cygańskiej tancerki z książki Victora Hugo Katedra Marii Panny w Paryżu. Stolicą została początkowo osada Aurora. W 1883 władze przeniosły się do Hawthorne. W 1907 ostatecznie przeniesione zostały do Goldfield. Podstawą gospodarki na początku XX wieku była eksploatacja złota. Zasoby większości kopalni zostały wyczerpane w latach 1910-1919. Od tego czasu hrabstwo podupadło gospodarczo, a wraz z kryzysem zmniejszyła się jego ludność. Całkowita powierzchnia wynosi 9295 km² z czego tylko 1 km² (0,01%) stanowi woda. Nad hrabstwem dominuje łańcuch górski Monte Cristo i góra Silver Peak. W hrabstwie leży miasto-widmo: Gold Point. </p></div>  : null}
                    {this.state.city === "Tarnowskie Góry" ? <div><div className="foto"><img src={foto6} alt="City market"></img></div><p>Tarnowskie Góry leżą w obrębie śląsko-krakowskiej dzielnicy klimatycznej. Charakteryzuje ją przewaga wpływów oceanicznych nad kontynentalnymi oraz sporadyczne oddziaływanie docierających tu od południowego zachodu przez Bramę Morawską mas powietrza zwrotnikowego. Docierają tu również zimne masy powietrza arktycznego z północy – głównie w chłodnej połowie roku. Średnia temperatura roczna wynosi 7,7 °C, zaś suma opadów atmosferycznych wynosi 699 mm w ciągu roku. Okres wegetacyjny trwa w Tarnowskich Górach średnio 246 dni. Historia miasta jest związana z wydobyciem rud srebra, ołowiu, a później również cynku. Według legendy, pierwszą bryłę kruszcu srebronośnego wyorał chłop Rybka ok. 1490 roku, co w 1612 roku w swoim dziele Officina ferraria zanotował Walenty Roździeński następującymi słowami „Srebrny kruszec w Bytomiu, na górach wnet nastał, Iny zasię od kruszca w mili zalanego, znaleziony przez chłopa Rybkę niejakiego”. W 1531 roku utworzono szkołę braci polskich, której rektorem na przełomie XVI i XVII w. był Daniel Franconius, wybitny pedagog i poeta braci polskich. Świetności miasta kres położyła wojna trzydziestoletnia (1618–1648). W 1676 roku w Tarnowskich Górach wybuchła zaraza, która ustąpiła po procesji błagalnej do Piekar. Na pamiątkę tego zdarzenia tarnogórzanie zobowiązali się udawać corocznie w niedzielę po 2 lipca do Sanktuarium Matki Boskiej Piekarskiej. Tradycja ta trwa do dzisiaj. W 1803 roku otwarto pierwszą szkołę górniczą, kilkanaście lat później wydrążono nową sztolnię „Fryderyk”, założono drukarnię, wybrukowano Rynek oraz ul. Krakowską i Lubliniecką (obecnie ul. Opolska), założono nowe fabryki i hutę żelaza, rozpoczęto budowę wodociągów miejskich. Również wtedy powstała Spółka Bracka jako instytucja ubezpieczająca górników. W 1857 roku uruchomiono pierwszą linię kolejową do Opola. Rozwój miasta przyspieszyło również utworzenie w 1873 roku powiatu tarnogórskiego. Podczas plebiscytu mieszkańcy miasta prawie w 85% opowiedzieli się za Niemcami, z kolei mieszkańcy powiatu opowiedzieli się za przynależnością do Polski – za Polską głosowało 62%, za przynależnością do Niemiec 38% (w tym prawie 10% tzw. emigrantów). W 1922 roku miasto włączono do Polski. Na początku XX w. wyczerpały się zasoby rud i zakończyło się wydobycie kruszcu. </p></div> : null}
                </div>
               
            </div >
         

        );
    }
}

export default Offer;

