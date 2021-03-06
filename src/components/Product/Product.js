import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({product, handleAddProduct}) => {
    const {name, img, seller, price, stock} = product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className="main-button" onClick={() => handleAddProduct(product)}><FontAwesomeIcon icon={faShoppingCart} />{" "}Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;