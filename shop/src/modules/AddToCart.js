import React from 'react';

class AddToCart extends React.Component {
    state = {
        products: [],
    }

    handleAddOrder(props) {
        const added = [{
            name: props.name,
            price: props.price,
        }]
        console.log(added);

    }
    render() {
        return (
            <div className="addToCart">
                <>
                    <button onClick={this.handleAddOrder}>Dodaj do koszyka</button>
                </>
            </div>
        );
    }
}


export default AddToCart;