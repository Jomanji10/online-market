import React from 'react';
import { Grid } from '@material-ui/core';
import ProductCardContainer from './components/ProductCard/ProductCardContainer';
import Header from './components/common/Header/Header';

function App() {
    return (
        <div>
            <Header />
            <ProductCardContainer />
        </div>
    );
}

export default App;
