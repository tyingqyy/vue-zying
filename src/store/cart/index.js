import Vue from "vue";

export const actionTypes = {
    ADD_TO_CART: "CART_ADD_TO_CART"
};
export default {
    state: {
        carts: [],
        count: 0,
        amount: 0
    },
    mutations: {
        [actionTypes.ADD_TO_CART](state, cart) {
            const type = cart.id;
            const find = state.carts.findIndex(item => item.type === type);
            if(find >= 0){
                Vue.set(state.carts, find, {
                    type: state.carts[find].type,
                    data: [...state.carts[find].data, cart]
                })
            }else {
                state.carts = [
                    ...state.carts,
                    {
                        type: cart.id,
                        data: [cart]
                    }
                ]
            }
        },
        [actionTypes.INIT_CART](state, carts) {
            state.carts = carts;
        }
    },
};
