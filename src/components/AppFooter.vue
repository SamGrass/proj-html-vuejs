<script>
import SponsorCard from './SponsorCard.vue'
import { router } from '../router.js'
import { store } from '../store.js';

export default {
    name: 'AppFooter',
    components: {
        SponsorCard
    },
    data() {
        return {
            router,
            store
        }
    },

}
</script>

<template>
    <footer>
        <!--  parte clients con carosello -->
        <section class="ms_carousel">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="section-header">
                            <h3>Why Anidio studio?</h3>
                            <h2>We Love Our Clients </h2>
                            <p>We are trusted throughout adland and have a wealth of recommendations from start-ups to renowned global brands. </p>
                        </div>
                        <div>
                            <!-- parte di carosello -->
                            <div class="ms_carousel-container">
                                <div class="ms_carousel-hidden">
                                    <SponsorCard  v-for="(sponsor, index) in store.sponsorList" :key="index" :image="sponsor.imageUrl"/>
                                    <SponsorCard  v-for="(sponsor, index) in store.sponsorList" :key="index" :image="sponsor.imageUrl"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- parte newsletter -->
        <section class="ms_newsletter vertical-shapes crack-section">
            <!-- aggiungere onde con css-->
            <div class="container">
                <div class="row">
                    <div class="col-6 offset-3 ms_text-newsletter">
                        <div class="section-header">
                            <h3>We Create New Worlds! </h3>
                            <h2>Want Tips On Your Storytelling? </h2>
                            <p>Join our newsletter for tips on how to elevate your brand through storytelling</p>
                        </div>
                        <form action="email">
                            <input type="email" class="ms_email-text" placeholder="Enter your email">
                            <a class="button" href="#!">Submit</a>
                        </form>
                    </div>
                </div>
            </div>
            <!-- aggiungere onde con css -->
        </section>

        <!-- parte navfooter e socials -->
        <section class="ms_footer-socials text-start">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col">
                        <img src="/footer-logo.png" alt="">
                    </div>
                    <nav class="col">
                        <ul class="d-flex justify-content-end ms_links ms_link-router">
                            <!-- COLLEGARE POI AL ROUTER -->
                            <li v-for="(item, index) in router.getRoutes()" :key="index">
                                <router-link :to="{ name: item.name }">{{ item.name }}</router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="ms_interline"></div>
                <div class="row justify-content-between">
                    <div class="col">
                        Copyright © 2022 <a class="ms_softivus" href="https://www.templatemonster.com/authors/softivus/">Softivus.</a> All rights reserved.
                    </div>
                    <div class="col">
                        <ul class="d-flex justify-content-end ms_links">
                            <!-- COLLEGARE AI SITI -->
                            <li><a class="social-button" href="#!"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a class="social-button" href="#!"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a class="social-button" href="#!"><i class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </footer>



</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.ms_carousel-container {
    overflow: hidden;

    @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc((-215px)* 6))}
    }

    .ms_carousel-hidden {
        display: flex;
        gap: 15px;
        justify-content: center;
        animation: scroll 10s linear infinite;
        width: calc(215px * 12);
    }
    
}

.ms_newsletter {
    .container {
        position: relative;
        z-index: 3;
    }

    form {
        display: flex;
        position: relative;

        .ms_email-text {
            width: 100%;
            border-radius: 2em;
            height: 3.5rem;
            padding: 0 11rem 0 1rem;
            border: none;
        }

        .button {
            position: absolute;
            top: 10%;
            right: 1%;
        }
    }
}


.ms_footer-socials {
    padding: 2rem 0 1rem;

    .ms_interline {
        width: 100%;
        height: 1px;
        background-color: $grey;
        margin-bottom: 1rem;
    }

    .ms_softivus {
        color: $blue;
    }

    .ms_links {
        gap: 1rem;

        .ms_link-router,
        li {
            &:hover {
                color: $blue
            }
        }
    }
}
</style>