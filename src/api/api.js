import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://192.168.0.108:1337/'
})

export const productApi = {
    fetchProducts: async (startWith, count) => {
        return await axiosInstance
            .get(`sneakers?_start=${startWith}&_limit=${count}`)
            .then(response =>
                response.data.map(sneakersItem => ({
                    id: sneakersItem.id,
                    title: sneakersItem.title,
                    price: sneakersItem.price,
                    photoUrl: sneakersItem.photoUrl,
                    size: sneakersItem.size,
                }))
            )
    }
}

export const cartApi = {
    getCartContent: async cartId => {
        return await axiosInstance
            .get(`carts/${cartId}`)
            .then(response => response.data.sneakers,
                e => { throw Error(e) })
    }
};

export const authApi = {
    logIn: async (login, password) => {
        console.log('inside')
        return await axiosInstance
            .post('auth/local', {
                identifier: login,
                password: password
            })
            .then(response => ({
                jwt: response.data.jwt,
                id: response.data.user.id,
                email: response.data.user.email,
                username: response.data.user.username,
                relatedCartId: response.data.user.cart.id,
                isLogged: true
            }),
                e => { throw Error(e) })
    }
}
