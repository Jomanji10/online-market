import axios from 'axios';
import { sizesInStockArrayFromObject } from './utils/transformSizesInStockObjectToArray';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:1337/'
});

export const productApi = {
    getProducts: (category, startWith, count) => {
        axiosInstance
            .get(
                `products?category=${category}&_start=${startWith}&_limit=${count}`
            )
            .then((response) => {
                const array = [];
                array.push(...response.data);

                // eslint-disable-next-line array-callback-return
                array.map((sneakers) => {
                    sneakers.properties[0].sizesInStock[0] = sizesInStockArrayFromObject(
                        sneakers.properties[0].sizesInStock[0]
                    );
                });
                console.log(array);
            });
    }
};
