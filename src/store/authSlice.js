import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authApi } from '../api/api'


export const fetchJwt = createAsyncThunk('fetchJwt',
    async (authData) => {
        return await authApi.logIn(authData.email, authData.password).then(response => response)
    })

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        jwt: null,
        id: null,
        email: null,
        username: null,
        relatedCartId: null,
        isLogged: false
    },
    extraReducers: {
        [fetchJwt.fulfilled]: (state, action) => {
            return state = action.payload
        },
    }
})


const { reducer } = authSlice
export default reducer
