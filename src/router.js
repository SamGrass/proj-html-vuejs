import { createRouter, createWebHistory } from 'vue-router';

import AppAboutUs from './pages/AppAboutUs.vue';
import AppContact from './pages/AppContact.vue';
import AppHome from './pages/AppHome.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'About Us',
            component: AppAboutUs
        },
        {
            path: '/contact',
            name: 'Contact Us',
            component: AppContact
        },


    ]
});
export { router };