import React from 'react';
import ProductList from '../modules/ProductList';


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
    // addProducts = () => {
    //     const product = {

    //     }
    //     this.setState(prevState => ({
    //         products: [...prevState.products, product]
    //     }))
    //     return true
    // }

    render() {
        return (
            <div className="products">
                <ProductList offers={this.state.offers} products={this.state.products} />

            </div>
        );
    }
}

export default Products;


