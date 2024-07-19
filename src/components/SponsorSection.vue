<script>
import SponsorCard from './SponsorCard.vue'
import { store } from '../store.js';

export default {
    name: 'AppFooter',
    components: {
        SponsorCard
    },
    data() {
        return {
            store,
            activeIndex: 0
        }
    },
}
</script>

<template>
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
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.ms_carousel {
    padding: 0 0 7.5rem;
}

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

</style>