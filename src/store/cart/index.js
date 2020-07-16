import Vue from "vue";

export const actionTypes = {
  ADD_TO_CART: "CART_ADD_TO_CART",
  DELETE_GOODS: "CART_DELETE_GOODS"
};
export default {
  state: {
    carts: [],
  },
  getters: {
    cartIds(state) {
      return state.carts.map(cart => cart.data.map(item => item.id)).flat(1);
    },
    cartCount(state, getters){
      return getters.cartIds.length;
    }
  },
  mutations: {
    [actionTypes.ADD_TO_CART](state, cart) {
      const type = cart.title;
      const find = state.carts.findIndex(item => item.type === type);
      if (find >= 0) {
        Vue.set(state.carts, find, {
          ...state.carts[find],
          data: [...state.carts[find].data, cart]
        });
      } else {
        state.carts = [
          ...state.carts,
          {
            type: cart.title,
            data: [cart]
          }
        ];
      }
    },
    [actionTypes.DELETE_GOODS](state, goods) {
      const goodsType = goods.title;
      const findCartIndex = state.carts.findIndex(cart => cart.type === goodsType);
      if (findCartIndex >= 0) {
        const find = state.carts[findCartIndex];
        if (find.data.length <= 1) {
          state.carts = [...state.carts.filter((item, index) => index !== findCartIndex)];
        } else {
          Vue.set(find, "data", [
            ...find.data.filter(item => item.id !== goods.id)
          ]);
        }

      }
    }
  }
};
