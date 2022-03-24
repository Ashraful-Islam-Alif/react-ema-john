import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({ product, handleAddToCart }) => {

    const { name, price, seller, ratings, img } = product

    return (
        <div className='product-container' >
            <div className='product-info'>
                <img width={286} src={img} alt="" srcset="" />
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Manufacture: {seller}</p>
                <p>Rating: {ratings} stars</p>

            </div>

            <button onClick={() => handleAddToCart(product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>

        </div>
    );
};

export default Product;