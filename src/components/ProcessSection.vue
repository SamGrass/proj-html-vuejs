<script>
import ProcessCard from './ProcessCard.vue';
import { store } from '../store.js';

export default {
    name: 'processSection',
    components: {
        ProcessCard
    },
    data() {
        return {
            store
        }
    },

}
</script>

<template>
    <section>
        <div class="container">
            <div class="row flex-xl-row-reverse align-items-center">
                <div class="col-md-12  col-xl-6">
                    <div class="text-start section-header">
                        <h3>Our Process</h3>
                        <h2>Our Process for Your Animation Production </h2>
                        <p>We have an effective process for working on animation </p>
                    </div>
                    <div class="ms_carousel-container">
                        <div class="ms_carousel-hidden">
                            <ProcessCard v-for="(process, index) in store.processList" :key="index" :num="index" :image="process.image" :title="process.title" :paragraph="process.paragraph" />
                            <ProcessCard v-for="(process, index) in store.processList" :key="index" :num="index" :image="process.image" :title="process.title" :paragraph="process.paragraph" />
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-xl-6">
                    <div class="ms_image-container">
                        <img class="ms_thumb" src="/process-thumb.png" alt="">
                    </div>

                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
section {
    padding: 0;

    .section-header {
        margin-left: 0;
    }
}

.ms_carousel-container {
    overflow: hidden;

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(calc((-315px)* 4))
        }
    }

    .ms_carousel-hidden {
        display: flex;
        gap: 15px;
        justify-content: center;
        animation: scroll 20s linear infinite;
        width: calc(315px * 8);
    }

}

.ms_image-container {
    margin-top: 2rem;
    display: flex;
    justify-content: center;

    .ms_thumb {
        position: relative;
        top: 0;
        left: -2rem;
        transition: all 0.5s ease;

        &:hover {
            left: 0;
        }
    }
}

@media screen and (min-width: 1200px) {

    .ms_image-container {

        .ms_thumb {
            max-width: none;
            left: -40%;

            &:hover {
                left: -35%;
            }
        }
    }
}
</style>