import React from 'react';
import Product from './Product';


const ProductList = (props) => {

    const productList = props.offers.map(offer => <Product key={offer.name} offer={offer} products={props.products} />)
    return (
        <div className="products">
            <h1>Nasze produkty:</h1>
            <ul>
                {productList}
            </ul>
        </div>
    );
}

export default ProductList;