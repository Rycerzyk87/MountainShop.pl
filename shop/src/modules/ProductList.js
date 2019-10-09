import React from 'react';
// import Product from './Product';

// function Product(props) {
//     const { name, text, price, foto, foto2 } = props.offer;
//     return (
//         <li className="product">
//             <div>
//                 <p className="name"><span >{name}</span></p>
//                 <div className="foto "><img src={foto} alt="product" /></div>
//                 <p className="descText">{text}</p>
//                 <div className="foto "><img src={foto2} alt="product" /></div>
//                 <p className="price">Cena: <span >{price}</span></p>
//                 <button onClick={this.props.addTB}>Dej do koszyka</button>

//             </div>
//         </li>
//     );
// }

class Product extends React.Component {
    state = {
        price: 0,
        numberOfItems: 0,
    }
    // basketAdd(prevState) {
    //     this.setState{
    //         return {numberOfItems: numberOfItems.count + 1}
    //     }
    // }
    basketAdd = (prevState) => {
        this.setState(prevState => {
            return { numberOfItems: prevState.numberOfItems + 1 }
        })
    }
    render(props) {
        const { name, text, price, foto, foto2 } = this.props.offer;
        return (
            <>
                <li className="product">
                    <div>
                        <p className="name"><span >{name}</span></p>
                        <div className="foto "><img src={foto} alt="product" /></div>
                        <p className="descText">{text}</p>
                        <div className="foto "><img src={foto2} alt="product" /></div>
                        <p className="price">Cena: <span >{price}</span></p>
                        <button onClick={this.basketAdd}>Dej do koszyka</button>

                    </div>
                </li>
                <div className="basket">Ilość rzeczy<br /> w koszyku: {this.state.numberOfItems}</div>
            </>
        );
    }
}

// export default Product;

class ProductList extends React.Component {
    state = {
        numberOfItems: 0,
    }

    render(props) {
        const productList = this.props.offers.map(offer => <Product key={offer.name} offer={offer} />)
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

// export default ProductList;



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