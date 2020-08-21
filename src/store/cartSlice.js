import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const getCartContent = createAsyncThunk('cart/getCartContent', )

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => state.push(action.payload)
    }
})


const { actions, reducer } = cartSlice;
export const { addToCart } = actions;
export default reducer;
