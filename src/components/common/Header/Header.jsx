import React from 'react';
import styles from './Header.scss';

const Header = (props) => {
    return (
        <header className="Header" style={styles}>
            <h2 className="Header__title">Header</h2>
            <button className="Header__cart-button" />
        </header>
    );
};

export default Header;
