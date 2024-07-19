<script>
import { router } from '../router.js'
import JumbotronHome from './JumbotronHome.vue';
import JumbotronAboutUs from './JumbotronAboutUs.vue';
import JumbotronContacts from './JumbotronContacts.vue';




export default {
    name: 'AppHeader',
    components: {
        JumbotronHome,
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
            <img class="planet uno" src="/globe1.png" alt="plantet">
            <img class="planet due" src="/globe2.png" alt="plantet">
            <img class="planet tre" src="/globe3.png" alt="plantet">
            <img class="planet ufo" src="/light.png" alt="plantet">
            <img class="planet starleft" src="/dots-left.png" alt="plantet">
            <img class="planet starlight" src="/dots-right.png" alt="plantet">
        </div>

        <!-- navbar con logo , link per le pagine e bottone Get a Quote  -->
        <nav>
            <img src="/logo.png" alt="">
            <div >
                <ul class="ms_link-router">
                    <li v-for="(item, index) in router.getRoutes()" :key="index">
                        <router-link @click="changeActiveIndex(index)" :to="{ name: item.name }">{{ item.name }}</router-link>
                    </li>
                    <li>
                        <a class="button" href="#">Get a Quote</a>
                    </li>
                </ul>

            </div>
            
        </nav>

        <JumbotronHome v-if="activeIndex === 0"/>
        <JumbotronAboutUs v-else-if="activeIndex === 1"/>
        <JumbotronContacts v-else-if="activeIndex === 2"/>
    </header>
        <div class="mb-10" v-if="activeIndex === 0">

        </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;



// regole generali header 
header {
    width: 100%;
    background: url(/banner-bg.png);
    background-size: cover;
    color: white;
    position: relative;
    z-index: 900;
    @include bottom-shape('/bottom-shape.png');
}

.mb-10 {
    margin-bottom: 10rem;
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
    align-items: center;    
}

li {
    margin: 0 1rem;

    &:hover {
        color: $orange;
        cursor: pointer;
    }
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
</style>
