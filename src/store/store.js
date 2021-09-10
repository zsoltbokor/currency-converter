import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        inputs: [],
        rates: {},
        currency: {
            from: null,
            to: null
        }
    },
    mutations,
    actions,
    getters
});
