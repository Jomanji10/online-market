import React from 'react';
import ProductCardContainer from '../components/ProductCard/ProductCardContainer';
import Header from '../components/common/Header/Header';
import styles from './positioning.scss';
import { Route } from 'react-router-dom';
import AuthContainer from './../components/Auth/AuthContainer';


function App() {
    return (
        <div>
            <div className="LeftPanel_position" style={styles}></div>
            <div className="RightPanel_position" style={styles}></div>
            <div className="Header_position" style={styles}>
                <Header />
            </div>
            <Route path="/products">
                <div className="ProductCardContainer_position" style={styles}>
                    <ProductCardContainer />
                </div>
            </Route>
            <Route path="/auth">
                <div className="AuthContainer_position" style={styles}>
                    <AuthContainer />
                </div>
            </Route>
            <Route path="/cart">
                <div></div>
            </Route>
        </div>
    );
}


export default App;
