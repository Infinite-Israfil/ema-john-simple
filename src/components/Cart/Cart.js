import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);

    let shipping = 0;
    if(totalPrice === 0){
        shipping = 0;
    }
    else if(totalPrice > 135) {
        shipping = 0;
    }
    else if(totalPrice > 70) {
        shipping = 4;
    }
    else if(totalPrice > 30) {
        shipping = 6;
    }
    else{
        shipping = 10;
    }

    const tax = (totalPrice*5)/100;
    const fixedTax = tax.toFixed(2);
    const ultimateTotal = (totalPrice + shipping + tax).toFixed(2);

    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <h5>Items Ordered: {cart.length}</h5>
            <p>Products Prices: ${totalPrice.toFixed(2)}</p>
            <p>Shipping Cost: {shipping?`$${shipping}`:"Free"}</p>
            <p>Tax + Vat: ${fixedTax}</p>
            <p>Total Price: ${ultimateTotal}</p>
        </div>
    );
};

export default Cart;