import React from 'react';
import ProductList from '../modules/ProductList';
import '../style/Products.css';


class Products extends React.Component {
    state = {
        offers: [],


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
    render() {
        return (
            <div className="products">
                <ProductList offers={this.state.offers} />

            </div>
        );
    }
}

export default Products;


