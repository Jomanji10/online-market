import React from 'react';
import { AppBar, Typography } from '@material-ui/core';

const Header = (props) => {
    return (
        <AppBar position="static">
            <Typography>Header</Typography>
        </AppBar>
    );
};

export default Header;
