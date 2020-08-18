import Vue from 'vue';
import VueRouter from "vue-router";
import Login from './../../components/views/auth/Login';
import Restore from './../../components/views/auth/Restore';
import Users from './../../components/views/users/Users';
Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        { path: '/', component: Users },
        { path: '/login', component: Login },
        { path: '/restore', component: Restore },
        { path: '*', redirect: '/' }
    ],
    mode: 'history'
})