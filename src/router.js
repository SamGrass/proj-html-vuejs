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
            component: AppHome,
            meta: {
                jumboBackground: 'banner-bg.png'
            }
        },
        {
            path: '/about',
            name: 'About Us',
            component: AppAboutUs,
            meta: {
                jumboBackground: 'banner-bg.png',
                jumboMascotte: 'rocket-banner.png'
            }
        },
        {
            path: '/contact',
            name: 'Contact',
            component: AppContact,
            meta: {
                jumboBackground: 'banner-bg3.png'
            }
        }
    ]
});
export { router };