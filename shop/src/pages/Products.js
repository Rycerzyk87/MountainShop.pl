import React from 'react';
// import ProductList from '../modules/ProductList';
import '../style/Products.css';


class Products extends React.Component {
    state = {
        // offers: [
        //     {
        //         name: "Czekan",
        //         text: "Zastosowana geometria oraz podwójna rączka oferuje kilka możliwości chwytu i bezproblemową zmianę rąk. Za maksimum komfortu i wygody odpowiada ergonomicznie wyprofilowana rączka oraz wspornik GRIPREST. Przesunięta dolna rękojeść zwiększa ochronę rąk oraz zwiększa komfort podczas wiszenia. Górna rękojeść została powleczona dla lepszego chwytu i ochrony przed zimnem. Wspornik ma trzy pozycje, można go dzięki temu dopasować do rozmiaru dłoni i rozmiaru rękawiczek. Ząbkowany grot w dolnej części został wykonany ze stali nierdzewnej. Wygięty dziób z hartowanej stali. Skuteczny nawet na twardym lodzie. Długi dziób, który dobrze trzyma na śniegu. Ergonomiczny kształt daje wiele możliwości użycia. Wykończenie antykorozyjne. ",
        //         price: 190,
        //         foto: "http://localhost:3001/static/media/czekan1.jpg",
        //         foto2: "../images/czekan2"
        //     },
        //     {
        //         name: "Raki koszykowe Climbing",
        //         text: "Raki turystyczne Climbing Technology Nevis Flex to kolejne już wcielenie niezwykle popularnego modelu, który zdobył uznanie wszystkich osób pokonujących zaśnieżone szlaki. Doskonale sprawdzi się na łatwiejszych trasach, a także osobom zaczynającym swoją przygodę z zimową turystyką górską. Wersja Flex została wzbogacona o nowoczesne, elastyczne łączniki. Wykonano je ze specjalnego gatunku stali nierdzewnej, dzięki czemu są lekko sprężyste. Pozwala to na lepsze dopasowanie raków nawet do butów trekkingowych o średniej twardości i optymalną pracę całej konstrukcji podczas każdego kroku. Lekki zgięcie łączników zapewnia także ich zwiększoną trwałość w trakcie intensywnego użytkowania.",
        //         price: 260,
        //         foto: "../images/raki1",
        //         foto2: "../images/raki2"
        //     },
        //     {
        //         name: "Lina wspinaczkowa",
        //         text: "Świetny model wybierany zazwyczaj przez doświadczonych wspinaczy. Wykorzystanie w niej innowacyjnej technologii Unicore pozwoliło połączyć ze sobą oplot oraz rdzeń liny. Dzięki temu operowanie nią jest niezwykle łatwe, a całość zachowuje wysoką wytrzymałość. Model ten świetnie sprawdza się podczas wspinaczki w skałach, a także na panelu. Dynamiczna lina pojedyncza Beal Diablo 9,8mm 80m Unicore Classic o mniejszej średnicy zapewnia płynniejszy przesuw w przyrządach i umożliwia łatwiejsze wpinanie w ekspresy. Szybkie wydawanie luzu przyda się podczas ekspresowego pokonywania drogi. Lina przeznaczona jest dla doświadczonych wspinaczy, gdyż wymaga uważnej asekuracji.",
        //         price: 799,
        //         foto: "../images/lina1",
        //         foto2: "../images/lina2"
        //     },
        //     {
        //         name: "Karabinek zjazdowy",
        //         text: "Karabinek z dużym prześwitem. Kształt D zapobiega przekręcaniu się karabinka i sprawia, że jest on obciążany wzdłuż dłuższej osi. System Keylock zapobiega zahaczaniu się o linę i spit. Pierścień Twist Lock można łatwo zakręcać nawet w rękawiczkach. Wystarczą 2 ruchy: do otwarcia wystarczy przekręcić i pociągnąć palcem. ",
        //         price: 350,
        //         foto: "../images/karabinek1",
        //         foto2: "../images/karabinek2"
        //     }
        // ],
        offers: [],
        price: 0,
        numberOfItems: 0,

    }
    getProducts = () => {
        const targetUrl = `http://localhost:3000/offers`;
        fetch(targetUrl, {
            method: 'GET',
        }).then(response => response.json())
            .then(data => {
                this.setState({
                    offers: data,
                })
            }
            );
    }
    componentDidMount() {
        this.getProducts();
    }
    basketAdd = (prevState) => {
        this.setState(prevState => {
            return {
                numberOfItems: prevState.numberOfItems + 1,
                price: Number(this.value)
            }

        })
    }
    render() {

        return (
            <div className="products">
                {this.state.offers.map(offer => {
                    return (
                        <li className="product">
                            <div>
                                <p className="name"><span >{offer.name}</span></p>
                                <div className="foto "><img src={offer.foto} alt="product" /></div>
                                <p className="descText">{offer.text}</p>
                                <div className="foto "><img src={offer.foto2} alt="product" /></div>
                                <p className="price">Cena: <span >{offer.price}</span></p>
                                <button onClick={this.basketAdd} value={offer.price}>Dej do koszyka</button>

                            </div>
                        </li>
                    )
                })}
                <div className="basket">Ilość rzeczy<br /> w koszyku: {this.state.numberOfItems}</div>
            </div>
        );
    }
}

export default Products;


