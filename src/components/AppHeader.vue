<script>
import { router } from '../router.js'
import Jumbotron from './Jumbotron.vue';

export default {
    name: 'AppHeader',
    components:{
        Jumbotron,
    },
    data() {
        return {
            router
        }
    },
    mounted() {
        console.log(router);
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
        <nav>
            <img src="/public/logo.png" alt="">
            <div>
                <ul class="ms_link-router">
                    <!-- <li v-for="(item, index) in router" :key="index">
                        <router-link :to="{ name: item.name }">{{ item.name }}</router-link>
                    </li> -->
                    <li>
                        <router-link :to="{ name: 'Home' }">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'About Us' }">About Us</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Contact Us' }">Contact Us</router-link>
                    </li>
                </ul>
                
            </div>
            <a class="button" href="#">Get a Quote</a>
        </nav>

        <Jumbotron />


        <!-- ondina a fine header  -->
        <div>
            <img src="../../public/bottom-shape.png" alt="">
        </div>
    </header>

</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;



// regole generali header 
header {
    width: 100%;
    background: url(../../public/banner-bg.png);
    background-size: cover;
    color: white;
    position: relative;
    z-index: 900;
    // debug
    min-height: 10rem;   
}

// regole navbar
nav{
    padding-top: 2rem;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

ul{
    display: flex;
    padding-top: 1rem;
}

li{
    margin: 0 1rem;
}

li:hover{
    color: $orange;
    cursor: pointer;
}

// regole dei pianeti in background 

.planet{
    position: absolute;
    z-index: -1;
}


.planet.uno{
    top: 10%;
    left: 10%;
    width: 5rem;
}

.planet.due{
    top: 18%;
    right: 30%;
    width: 5rem;
}

.planet.tre{
    top: -18%;
    left: 33%;
    width: 18rem;
}

.planet.ufo{
    right: 9%;
    top: 11%;
}

.planet.starleft{
    top: 5%;
    left: 1%;
}

.planet.starlight{
    top: 8%;
    right: 1%;
    z-index: -2;
}

</style>

