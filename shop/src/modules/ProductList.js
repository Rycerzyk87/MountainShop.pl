import React from 'react';
// import Product from './Product';

function Product(props) {
    const { name, text, price, foto, foto2 } = props.offer;
    return (
        <li className="product">
            <div>
                <p className="name"><span >{name}</span></p>
                <div className="foto "><img src={foto} alt="product" /></div>
                <p className="descText">{text}</p>
                <div className="foto "><img src={foto2} alt="product" /></div>
                <p className="price">Cena: <span >{price}</span></p>

            </div>
        </li>
    );
}

class ProductList extends React.Component {
    state = {

    }
    render(props) {
        const productList = this.props.offers.map(offer => <Product key={offer.name} offer={offer} value={offer.price} />)
        return (
            <div className="products">
                <h1>Nasze produkty:</h1>
                <ul>
                    {productList}
                </ul>
            </div>
        );
    }

}

export default ProductList;



// const ProductList = (props) => {

//     const productList = props.offers.map(offer => <Product key={offer.name} offer={offer} />)
//     return (
//         <div className="products">
//             <h1>Nasze produkty:</h1>
//             <ul>
//                 {productList}
//             </ul>
//         </div>
//     );
// }

// export default ProductList;