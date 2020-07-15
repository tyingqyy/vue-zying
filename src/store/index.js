import Vue from "vue";
import Vuex from "vuex";
import cart from "./cart";
import resource from './resource'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    cart,
    resource
  }
});
