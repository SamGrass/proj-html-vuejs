<script>
import { router } from '../router.js';
import { useRoute } from 'vue-router';
import JumbotronGeneric from './JumbotronGeneric.vue';
import JumbotronHome from './JumbotronHome.vue';

export default {
    name: 'AppHeader',

    components: {
        JumbotronHome,
        JumbotronGeneric
    },

    data() {
        return {
            router
        }
    },

    computed: {
        getCurrentRoute() {
            return useRoute();
        }
    }
}
</script>

<template>

    <header :style="{ 'background-image': `url(/${getCurrentRoute.meta.jumboBackground})` }">
        <!-- pianeti in absolute  -->
        <div>
            <div class="background-element planet-left">
                <img src="/globe1.png" alt="Plantet">
            </div>

            <div class="background-element planet-two">
                <img src="/globe2.png" alt="Plantet">
            </div>

            <div class="background-element planet-three">
                <img src="/globe3.png" alt="Plantet">
            </div>

            <div class="background-element ufo">
                <img src="/light.png" alt="UFO">
            </div>

            <div class="background-element starlight-left">
                <img src="/dots-left.png" alt="Starlight">
            </div>

            <div class="background-element starlight-right">
                <img src="/dots-right.png" alt="Starlight">
            </div>
        </div>

        <!-- navbar con logo , link per le pagine e bottone Get a Quote  -->
        <div class="container">
            <nav>
                <img src="/logo.png" alt="">
                <div class="desktop_navbar">

                    <ul class="ms_link-router">
                        <li v-for="(item, index) in router.getRoutes()" :key="index">
                            <router-link :to="{ name: item.name }">{{ item.name }}</router-link>
                        </li>
                        <li>
                            <a class="button" href="#">Get a Quote</a>
                        </li>
                    </ul>
                </div>

                <!-- HAMBURGER MENU  -->

                <div class="hamburger-menu">
                    <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
                        <div>
                            <ul>
                                <li v-for="(item, index) in router.getRoutes()" :key="index">
                                    <router-link :to="{ name: item.name }">{{ item.name }}</router-link>
                                </li>
                                <li><a class="button" href="#">Get a Quote</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="navbar navbar-dark ">
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span><i class="fa-solid fa-bars"></i></span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>




        <JumbotronHome v-if="getCurrentRoute.path === '/'" />
        <JumbotronGeneric v-else :nameOfPage="getCurrentRoute.name" :mascotte="getCurrentRoute.meta.jumboMascotte" />
    </header>
    <div class="mb-10" v-if="getCurrentRoute.path === '/'">

    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;



// regole generali header 
header {
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    color: $white;
    position: relative;
    z-index: 900;
    @include bottom-shape('/bottom-shape.png');

    .button {
        box-shadow: 0 .5rem 1rem #6d648b9c;
    }
}

.mb-10 {
    margin-bottom: 10rem;
}

// regole navbar
nav {
    @include flex-center(vertical);
    justify-content: space-between;
}

ul {
    @include flex-center(vertical);
    padding-top: 1rem;
}

li {
    margin: 0 1rem;

    &:hover {
        color: $orange;
        cursor: pointer;
    }
}

.hamburger-menu {
    display: none;
}

// regole dei pianeti in background 

.background-element {
    position: absolute;
    z-index: -1;

    &.planet-left {
        top: 12%;
        left: 10%;
        width: 8rem;
    width: 5rem;
    }

    &.planet-two {
        top: 18%;
        right: 30%;
        width: 6rem;
    }

    &.planet-three {
        top: -18%;
        left: 33%;
        width: 18rem;
    }

    &.ufo {
        right: 9%;
        top: 11%;
    }

    &.starlight-left {
        top: 5%;
        left: 1%;
    }

    &.starlight-right {
        top: 8%;
        right: 1%;
        z-index: -2;
    }

    img {
        width: 100%;
    }
}


// //  // MEDIA QUERIES // // // 


@media screen and (max-width: 991px) {
    .desktop_navbar {
        display: none;
    }

    .hamburger-menu {
        display: flex;
    }

    .planet-three {
        display: none;
    }

    .starlight-left {
        display: none;
    }

    .starlight-right {
        display: none;
    }

}
</style>
