import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productApi } from './../api/api';


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        return await productApi.fetchProducts(0, 10)
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            state.push(action.payload);
        }
    },

    extraReducers: {
        [fetchProducts.fulfilled]: (state, action) => {
            state.push(...action.payload)
        },

        [fetchProducts.rejected]: (state, action) => {
            throw Error('API request has been rejected')
        }
    }
})


const { actions, reducer } = productsSlice;
export const { setProducts } = actions;
export default reducer;
