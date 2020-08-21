import React from 'react';
import styles from './ProductCard.scss';

const ProductCard = (props) => {
    return (
        <div className="ProductCard" style={styles}>
            <img
                className="ProductCard__image"
                src={props.photoUrl}
                alt="Product"
            ></img>
            <span className="ProductCard__title">{props.title}</span>
            <span className="ProductCard__size">{props.size}</span>
            <span className="ProductCard__price">{props.price}</span>
        </div>
    );
};

export default ProductCard;
