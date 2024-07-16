import { createRouter, createWebHistory } from 'vue-router';

import AppAboutUs from './pages/AppAboutUs.vue';
import AppContact from './pages/AppContact.vue';
import AppHome from './pages/AppHome.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/'
            ,
            name: 'home'
            ,
            component: AppHome
        },
        {
            path: '/about'
            ,
            name: 'aboutus'
            ,
            component: AppAboutUs
        },
        {
            path: '/contact'
            ,
            name: 'contactus'
            ,
            component: AppContact
        },


    ]
});
export { router };