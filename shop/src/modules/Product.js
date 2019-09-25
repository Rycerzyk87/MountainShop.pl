import React from 'react';
import AddToCart from './AddToCart';

function Product(props) {
    const { name, text, price, foto } = props.offer;
    return (
        <li className="product">
            <div>
                <p className="name"><span >{name}</span></p>
                <p className="text">{text}</p>
                <p className="price">Cena: <span >{price}</span></p>
                {/* <p className="name">{foto}</p> */}
                <AddToCart products={props.products} />
            </div>
        </li>
    );
}

export default Product;