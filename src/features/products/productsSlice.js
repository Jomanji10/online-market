import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [
            {
                title: 'New Balance 547',
                price: 2500
            }
        ]
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = [...state.products, action.payload];
        }
    }
});

const { actions, reducer } = productsSlice;

export const { setProducts } = actions;
export default reducer;
