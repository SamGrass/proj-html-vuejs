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
    <section class="facts-section">
        <div class="container">
            <h2 class="section-header">
                Anidio Quick Facts
            </h2>

            <ul class="row">
                <li class="col-3" v-for="fact in facts">
                    <FactsCard :factNumber="fact.number" :factText="fact.text" />
                </li>
            </ul>
        </div>

        <div class="background-planet">
            <img src="/globe.png" alt="">
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.facts-section {
    background-image: url(/counter-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    color: $white;
    overflow: hidden;

    .container {
        position: relative;
        z-index: 3;
    }

    &::before,
    &::after {
        content: '';
        background-repeat: no-repeat;
        background-size: 100% auto;
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
    }

    &::before {
        background-image: url(/shape-top.png);
        background-position: top;
    }

    &::after {
        background-image: url(/shape-bottom.png);
        background-position: bottom;
    }

    .background-planet {
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