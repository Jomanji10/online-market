import {combineReducers} from 'redux';
import productsSlice from '../features/products/productsSlice';

export default combineReducers({
    products: productsSlice
})