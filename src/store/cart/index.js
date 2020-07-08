import { getCart } from "../../api";

export const actions = {
  FETCH_CART: "CART_FETCH_CART",
  INIT_CART: "CART_INIT_CART",
  ADD_TO_CART: "CART_ADD_TO_CART"
};
export default {
  state: {
    carts: [],
    count: 0,
    amount: 0
  },
  mutations: {
    [actions.ADD_TO_CART](state, cart) {
      state.carts.push(cart);
    },
    [actions.INIT_CART](state, carts) {
      state.carts = carts;
    }
  },
  actions: {
    async [actions.FETCH_CART](context) {
      const carts = await getCart();
      context.commit(actions.INIT_CART, carts);
    }
  }
};
