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
        <img class="ms_thumb" src="/process-thumb.png" alt="">
        <div class="container">
            <div class="row">
                <div class="col-6 offset-6">
                    <div class="text-start">
                        <h3>Our Process</h3>
                        <h2>Our Process for Your Animation Production </h2>
                        <p>We have an effective process for working on animation </p>
                    </div>
                    <div class="ms_process-container">
                        <ProcessCard v-for="(process, index) in store.processList" :key="index" :num="index" :image="process.image" :title="process.title" :paragraph="process.paragraph"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
</template>

<style lang="scss" scoped>
.ms_process-container {
    width: 100%;
    display: flex;
    gap: 1rem;
    justify-content: space-between; 
}

.ms_thumb {
    position: absolute;
    top: 0;
    left: -2rem;
    transition: all 0.5s ease;

    &:hover {
        left: 0;
    }
}
</style>