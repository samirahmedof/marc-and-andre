import Vue from 'vue';
import VueRouter from "vue-router";
import Login from './../../components/views/auth/Login';
import Restore from './../../components/views/auth/Restore';
import Users from './../../components/views/users/Users';
import UserProfile from './../../components/views/users/UserProfile';
import Profile from './../../components/views/profile/Profile';
import QuickRegistration from './../../components/views/quick-registration/QuickRegistration';
import Exhibition from './../../components/views/exhibition/Exhibition';
import Catalog from './../../components/views/catalog/Catalog';
import Card from './../../components/views/catalog/Card';
import Orders from './../../components/views/orders/Orders';
import VisualCatalog from './../../components/views/orders/VisualCatalog';
import ShippingAndPayment from './../../components/views/shipping-and-payment/ShippingAndPayment';
import About from './../../components/views/about/About';
import OrderDetails from './../../components/views/order-details/OrderDetails';


Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        { path: '/users', component: Users, name: 'users' },
        { path: '/users/:id', component: UserProfile, name: 'user' },
        { path: '/login', component: Login, name: 'login' },
        { path: '/restore', component: Restore, name: 'restore' },
        { path: '/profile', component: Profile, name: 'profile' },
        { path: '/quick-registration', component: QuickRegistration, name: 'quick-registration' },
        { path: '/exhibition', component: Exhibition, name: 'exhibition' },
        { path: '/catalog', component: Catalog, name: 'catalog' },
        { path: '/catalog/:id', component: Card, name: 'catalog-item' },
        { path: '/orders', component: Orders, name: 'orders' },
        { path: '/orders/:id', component: VisualCatalog, name: 'order' },
        { path: '/shipping-and-payment', component: ShippingAndPayment, name: 's-p' },
        { path: '/about', component: About, name: 'about' },
        { path: '/order-details', component: OrderDetails, name: 'order-details' },
        { path: '*', redirect: '/profile' }
    ],
    mode: 'history'
})