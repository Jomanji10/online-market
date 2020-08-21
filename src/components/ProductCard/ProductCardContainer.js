import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/productsSlice';
import styles from './ProductCardContainer.scss';


const ProductCardContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const products = useSelector((state) => state.products);

    return (
        <div className="ProductCardContainer" style={styles}>
            {products.map((product) => (
                <ProductCard {...product} key={product.id} />
            ))}
        </div>
    );
};


export default ProductCardContainer;
