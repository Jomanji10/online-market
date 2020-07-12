import React from 'react';
import ProductCardContainer from './components/ProductCard/ProductCardContainer';
import Header from './components/common/Header/Header';
import { productApi } from './api/api';
function App() {
    productApi.getProducts('sneakers', 0, 10);
    return (
        <div>
            <Header />
            <ProductCardContainer />
        </div>
    );
}

export default App;
