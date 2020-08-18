import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        isLogged: true
    },
    getters: {
        getIsLogged(state) {
            return state.isLogged;
        }
    },
    mutations: {
        changeLogged(state) {
            state.isLogged = !state.isLogged;
        }
    }
});
