import React from 'react';
import '../style/Products.css';

class Products extends React.Component {
    state = {
        offers: [],
        price: 0,
        numberOfItems: 0

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
    basketminus = (prevState) => {
        this.setState(prevState => {
            return {
                numberOfItems: prevState.numberOfItems - 1,
                // price: Number(this.value)
            }

        })
    }
    basketAdd = (prevState, props) => {
        console.log(this.props.data)
        this.setState(prevState => {
            return {
                numberOfItems: prevState.numberOfItems + 1,
                // price: Number(this.value)
            }

        })
    }
    render() {

        return (
            <>

                <div className="products">
                    {this.state.offers.map(offer => {
                        return (
                            <li className="product" key={offer.name} >
                                <div>
                                    <p className="name"><span >{offer.name}</span></p>
                                    <div className={offer.name} ><img src={offer.foto} alt="product" /></div>
                                    <p className="descText">{offer.text}</p>
                                    <p className="price">Cena: <span >{offer.price}</span></p>
                                    <button disabled={this.state.numberOfItems <= 0 ? true : false} onClick={this.basketminus}>-</button>
                                    <button onClick={this.basketAdd} data={offer.price}>Dej do koszyka</button>

                                </div>
                            </li>
                        )
                    })}
                    <div className="basket">Ilość rzeczy<br /> w koszyku: {this.state.numberOfItems}</div>

                </div>
            </>
        );
    }
}

export default Products;


