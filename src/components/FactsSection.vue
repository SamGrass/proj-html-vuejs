<script>
import FactsCard from './FactsCard.vue';


export default {
    name: 'FactsSection',

    components: {
        FactsCard
    },

    data() {
        return {
            facts: [
                {
                    text: 'Projects done',
                    number: 700
                },
                {
                    text: 'Happy Clients',
                    number: 250
                },
                {
                    text: 'Team Members',
                    number: 25
                },
                {
                    text: 'Years on the market',
                    number: 12
                }
            ]
        }
    }
}
</script>

<template>
    <section class="facts-section vertical-shapes crack-section">
        <div class="container">
            <h2 class="section-header">
                Anidio Quick Facts
            </h2>

            <ul class="row">
                <li class="col-lg-3 col-md-6 col-12 g-4" v-for="fact in facts">
                    <FactsCard :factNumber="fact.number" :factText="fact.text" />
                </li>
            </ul>
        </div>

        <div class="planet background-element">
            <img src="/globe.png" alt="">
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.facts-section {
    overflow: hidden;

    .container {
        position: relative;
        z-index: 3;
    }

    .planet {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 100%;
        animation: factsPlanet 30s linear infinite;

        img {
            height: 100%;
        }
    }
}

@keyframes factsPlanet {
    30% {
        transform: translate(-50%, -50%) rotate(180deg);
    }
}
</style>