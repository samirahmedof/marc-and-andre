import Vue from 'vue';
import VueRouter from "vue-router";
import Login from './../../components/views/auth/Login';
import Restore from './../../components/views/auth/Restore';
import Users from './../../components/views/users/Users';
import Profile from './../../components/views/profile/Profile';
import QuickRegistration from './../../components/views/quick-registration/QuickRegistration';
import Exhibition from './../../components/views/exhibition/Exhibition';
import Catalog from './../../components/views/catalog/Catalog';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        { path: '/', component: Users },
        { path: '/login', component: Login },
        { path: '/restore', component: Restore },
        { path: '/profile', component: Profile },
        { path: '/quick-registration', component: QuickRegistration },
        { path: '/exhibition', component: Exhibition },
        { path: '/catalog', component: Catalog },
        { path: '*', redirect: '/' }
    ],
    mode: 'history'
})