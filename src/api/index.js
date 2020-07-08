// import {axiosInstance} from '../plugins/axios';
import {cart} from '../../mock/cart';

export const getCart = () => {
    return Promise.resolve(cart);
}