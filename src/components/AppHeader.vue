<script>
import { router } from '../router.js'
import Jumbotron from './Jumbotron.vue';
import JumbotronAboutUs from './JumbotronAboutUs.vue';
import JumbotronContacts from './JumbotronContacts.vue';




export default {
    name: 'AppHeader',
    components: {
        Jumbotron,
        JumbotronAboutUs,
        JumbotronContacts
    },
    data() {
        return {
            router,
            activeIndex: 0
        }
    },
    methods: {
        changeActiveIndex(index) {
            this.activeIndex = index; 
        }
    },

}
</script>

<template>

    <header>
        <!-- pianeti in absolute  -->
        <div>
            <img class="planet uno" src="../../public/globe1.png" alt="plantet">
            <img class="planet due" src="../../public/globe2.png" alt="plantet">
            <img class="planet tre" src="../../public/globe3.png" alt="plantet">
            <img class="planet ufo" src="../../public/light.png" alt="plantet">
            <img class="planet starleft" src="../../public/dots-left.png" alt="plantet">
            <img class="planet starlight" src="../../public/dots-right.png" alt="plantet">
        </div>

        <!-- navbar con logo , link per le pagine e bottone Get a Quote  -->
        <nav class="justify-content-md-between">
            <img src="/public/logo.png" alt="">
            <div class="desktop_navbar">

                <ul class="ms_link-router">
                    <li v-for="(item, index) in router.getRoutes()" :key="index">
                        <router-link @click="changeActiveIndex(index)" :to="{ name: item.name }">{{ item.name }}</router-link>
                    </li>
                </ul>
            </div>
            <a  class="button desktop_navbar" href="#">Get a Quote</a>

                   <!-- HAMBURGER MENU  -->

            <div class="hamburger-menu">
                   <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
                    <div >
                        <ul>
                    <li v-for="(item, index) in router.getRoutes()" :key="index">
                        <router-link @click="changeActiveIndex(index)" :to="{ name: item.name }">{{ item.name }}</router-link>
                    </li>
                    <li><a  class="button" href="#">Get a Quote</a></li>
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

         


        <Jumbotron v-if="activeIndex === 0"/>
        <JumbotronAboutUs v-else-if="activeIndex === 1"/>
        <JumbotronContacts v-else-if="activeIndex === 2"/>
    </header>

</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;



// regole generali header 
header {
    width: 100%;
    background: url(../../public/banner-bg.png);
    background-size: cover;
    color: white;
    position: relative;
    z-index: 900;
    @include bottom-shape('/bottom-shape.png');
    // debug
    min-height: 10rem;
}

// regole navbar
nav {
    padding-top: 2rem;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

ul {
    display: flex;
    padding-top: 1rem;
}

li {
    margin: 0 1rem;

    &:hover {
        color: $orange;
        cursor: pointer;
    }
}

.hamburger-menu{
    display: none;
}

// regole dei pianeti in background 

.planet {
    position: absolute;
    z-index: -1;
}


.planet.uno {
    top: 10%;
    left: 10%;
    width: 5rem;
}

.planet.due {
    top: 18%;
    right: 30%;
    width: 5rem;
}

.planet.tre {
    top: -18%;
    left: 33%;
    width: 18rem;
}

.planet.ufo {
    right: 9%;
    top: 11%;
}

.planet.starleft {
    top: 5%;
    left: 1%;
}

.planet.starlight {
    top: 8%;
    right: 1%;
    z-index: -2;
}


// //  // MEDIA QUERIES // // // 


@media screen and (max-width: 991px) {
    nav{
        width: 70%;
    }   

    .desktop_navbar{
        display: none;
    }

    .hamburger-menu{
        display: flex;
    }

    .planet.tre {
        display: none;
    }

}
</style>
