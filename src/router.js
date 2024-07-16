import { createRouter, createWebHistory } from 'vue-router';

import AppAboutUs from './pages/AppAboutUs.vue';
import AppBlog from './pages/AppBlog.vue';
import AppContact from './pages/AppContact.vue';
import AppGetQuote from './pages/AppGetQuote.vue';
import AppHome from './pages/AppHome.vue';
import AppOurProcess from './pages/AppOurProcess.vue';
import AppPortfolio from './pages/AppPortfolio.vue';
import AppPricing from './pages/AppPricing.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/'
            ,
            name: 'aboutus'
            ,
            component: AppAboutUs
        },
        {
            path: '/'
            ,
            name: 'blog'
            ,
            component: AppBlog
        },
        {
            path: '/'
            ,
            name: 'contact'
            ,
            component: AppContact
        },
        {
            path: '/'
            ,
            name: 'quote'
            ,
            component: AppGetQuote
        },
        {
            path: '/'
            ,
            name: 'home'
            ,
            component: AppHome
        },
        {
            path: '/'
            ,
            name: 'process'
            ,
            component: AppOurProcess
        },
        {
            path: '/'
            ,
            name: 'portfolio'
            ,
            component: AppPortfolio
        },
        {
            path: '/'
            ,
            name: 'pricing'
            ,
            component: AppPricing
        },
    ]
});
export { router };