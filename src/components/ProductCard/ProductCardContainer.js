import React from 'react';
import ProductCard from './ProductCard';
import { connect } from 'react-redux';
import { setProducts } from '../../features/products/productsSlice';

class ProductCardContainer extends React.Component {
    render() {
        return this.props.products.map((product) => (
            <ProductCard
                product={product}
                setProducts={this.props.setProducts}
            />
        ));
    }
}

const mapStateToProps = (state) => ({
    products: state.products.products,
});

const mapDispatchToProps = (dispatch) => ({
    setProducts: () => dispatch(setProducts({ ya: 'sosu' })),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductCardContainer);
