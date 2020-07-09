import React from 'react';
import ProductCard from './ProductCard';
import { connect } from 'react-redux';

class ProductCardContainer extends React.Component {
    render() {
        return this.props.products.map((product) => (
            <ProductCard
                product={product}
            />
        ));
    }
}

const mapStateToProps = (state) => ({
    products: state.products.products
});

export default connect(
    mapStateToProps
)(ProductCardContainer);
