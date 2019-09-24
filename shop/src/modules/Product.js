import React from 'react';

function Product(props) {
    const { name, text, price, foto } = props.offer;
    return (
        <li className="product">
            <p className="name"><span >{name}</span></p>
            <p className="text">{text}</p>
            <p className="price">Cena: <span >{price}</span></p>
            <p className="name">{foto}</p>

        </li>
    );
}

export default Product;