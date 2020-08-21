import { combineReducers } from 'redux';
import productsSlice from './productsSlice';
import cartSlice from './cartSlice'
import authSlice from './authSlice'


export default combineReducers({
    products: productsSlice,
    cart: cartSlice,
    auth: authSlice
});
