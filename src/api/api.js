import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:1337/'
});

export const productApi = {
    getProducts: () => {axiosInstance.get('products')}
};
