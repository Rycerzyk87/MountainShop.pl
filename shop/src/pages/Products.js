import React from 'react';
import Product from '../modules/Product';


class Products extends React.Component {
    state = {
        offers: [
            {
                name: "czekan",
                text: "super czekan dp czekanowania",
                price: 1902,
                foto: "#",
            },
            {
                name: "czapka",
                text: "super czpka dp noszenia",
                price: 912,
                foto: "#",
            },
            {
                name: "plecak",
                text: "super plecak dp noszenia",
                price: 1200,
                foto: "#",
            },
            {
                name: "termos",
                text: "super termos dp picia",
                price: 120,
                foto: "#",
            },
        ],
        products: [],

    }
    addProducts = () => {
        const product = {

        }
        this.setState(prevState => ({
            products: [...prevState.products, product]
        }))
        return true
    }
    ProductList() {
        this.state.offers.map(offer => <Product key={offer.name} offer={offer} />)
    }
    render() {
        return (
            <div className="products">
                <ul>
                    {this.ProductList}
                </ul>

            </div>
        );
    }
}

export default Products;


