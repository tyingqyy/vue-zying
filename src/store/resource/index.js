import {getCart} from "../../api";


export const actions = {
    CHANGE_LIST:"RESOURCE_CHANGE_LIST",
    FETCH_LIST: "RESOURCE_FETCH_LIST"
}
export default {
    state:{
        list:[]
    },
    mutations:{
        [actions.CHANGE_LIST](state,list){
            state.list = list;
        }
    },
    actions: {
        async [actions.FETCH_LIST](context) {
            const carts = await getCart();
            context.commit(actions.CHANGE_LIST, carts);
        }
    }
}