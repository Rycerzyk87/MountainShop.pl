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
        // this.setState({
        //     products: added
        // })
    }
    render() {
        return (
            <div className="addToCart">
                <>
                    <button onClick={this.handleAddOrder}>Dodaj do koszyka</button>
                    <span>{this.props.products.length}</span>
                </>
            </div>
        );
    }
}


export default AddToCart;